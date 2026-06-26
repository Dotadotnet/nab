"use client";

import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  usePersistSessionQuery,
  useCreateSessionMutation,
  useTrackSessionMutation
} from "@/services/session/sessionApi";
import { setSession } from "@/features/auth/authSlice";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

function buildSessionPayload({ event = "pageview", startedAt, durationMs = 0 } = {}) {
  if (typeof window === "undefined") return {};

  const navigation = performance.getEntriesByType("navigation")?.[0];
  const params = new URLSearchParams(window.location.search);

  return {
    event,
    url: window.location.href,
    path: window.location.pathname + window.location.search,
    title: document.title,
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

  fetch(`${baseUrl}/session/track`, {
    method: "POST",
    credentials: "include",
    keepalive: true,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

const Session = ({ children }) => {
  const locale = useLocale();
  const pathname = usePathname();

  const dispatch = useDispatch();
  const [createSession] = useCreateSessionMutation();
  const [trackSession] = useTrackSessionMutation();
  const {
    data: sessionData,
    error: sessionError,
    isFetching
  } = usePersistSessionQuery({ locale });

  const session = useMemo(() => sessionData?.data || null, [sessionData]);
  useEffect(() => {
    if (!isFetching && session) {
      dispatch(setSession(session));
    } else if (!isFetching && sessionError) {
      createSession();
    }
  }, [dispatch, session, sessionError, createSession, isFetching]);

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

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      flush("route_change");
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname, session, trackSession]);

  return <>{children}</>;
};

export default Session;
