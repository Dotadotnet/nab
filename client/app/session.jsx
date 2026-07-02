"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  usePersistSessionQuery,
  useCreateSessionMutation,
  useTrackSessionMutation
} from "@/services/session/sessionApi";
import { setSession } from "@/features/auth/authSlice";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

function getClickTargetData(target) {
  const element = target?.closest?.(
    "a,button,input,select,textarea,[role='button'],[data-track-click]"
  );

  if (!element) return null;

  const text = (element.innerText || element.value || element.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);

  return {
    tag: element.tagName?.toLowerCase() || "",
    text,
    href: element.href || element.getAttribute("href") || "",
    id: element.id || "",
    name: element.getAttribute("name") || "",
    type: element.getAttribute("type") || "",
    role: element.getAttribute("role") || "",
    trackingKey: element.getAttribute("data-track-click") || ""
  };
}

function buildSessionPayload({ event = "pageview", startedAt, durationMs = 0, click } = {}) {
  if (typeof window === "undefined") return {};

  const navigation = performance.getEntriesByType("navigation")?.[0];
  const params = new URLSearchParams(window.location.search);
  const clickTitle = click?.trackingKey || click?.text || click?.href || "";

  return {
    event,
    url: window.location.href,
    path: window.location.pathname + window.location.search,
    title: event === "click" && clickTitle ? clickTitle : document.title,
    click,
    referrer: document.referrer,
    navigationType: navigation?.type,
    startedAt: startedAt || new Date().toISOString(),
    endedAt: new Date().toISOString(),
    durationMs,
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: {
      width: window.screen?.width,
      height: window.screen?.height,
      pixelRatio: window.devicePixelRatio
    },
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined
  };
}

function sendSessionBeacon(payload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl || typeof window === "undefined") return;

  const token = localStorage.getItem("accessToken");

  fetch(`${baseUrl}/session/track`, {
    method: "POST",
    credentials: "include",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

const Session = ({ children }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const { data: nextAuthSession } = useSession();

  const dispatch = useDispatch();
  const initializedRef = useRef(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [createSession] = useCreateSessionMutation();
  const [trackSession] = useTrackSessionMutation();
  const {
    data: sessionData,
    isFetching
  } = usePersistSessionQuery(
    { locale },
    {
      skip: !sessionReady
    }
  );

  const session = useMemo(() => sessionData?.data || null, [sessionData]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    createSession({ locale })
      .unwrap()
      .then((data) => {
        dispatch(setSession(data?.data || data));
      })
      .catch(() => {})
      .finally(() => {
        setSessionReady(true);
      });
  }, [createSession, dispatch, locale]);

  useEffect(() => {
    if (!sessionReady) return;

    if (!isFetching && session) {
      dispatch(setSession(session));
    }
  }, [dispatch, session, isFetching, sessionReady]);

  useEffect(() => {
    if (!session) return undefined;

    const startedAt = new Date().toISOString();
    const startedTime = Date.now();
    let lastFlushTime = startedTime;
    const pageviewPayload = buildSessionPayload({ event: "pageview", startedAt });

    trackSession(pageviewPayload);

    const flush = (event = "pageleave") => {
      const now = Date.now();
      const durationMs = Math.max(0, now - lastFlushTime);
      lastFlushTime = now;

      sendSessionBeacon(
        buildSessionPayload({
          event,
          startedAt,
          durationMs
        })
      );
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flush("visibility_hidden");
      }
    };
    const handleBeforeUnload = () => flush("beforeunload");
    const handleClick = (event) => {
      const click = getClickTargetData(event.target);
      if (!click) return;

      sendSessionBeacon(
        buildSessionPayload({
          event: "click",
          startedAt: new Date().toISOString(),
          click
        })
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      flush("route_change");
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname, session, trackSession]);

  useEffect(() => {
    if (!sessionReady || !nextAuthSession?.accessToken) return;

    localStorage.setItem("accessToken", nextAuthSession.accessToken);
    trackSession(buildSessionPayload({ event: "auth_link" }));
  }, [nextAuthSession?.accessToken, sessionReady, trackSession]);

  return <>{children}</>;
};

export default Session;
