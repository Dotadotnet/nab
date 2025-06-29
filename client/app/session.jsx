"use client";

import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  usePersistSessionQuery,
  useCreateSessionMutation
} from "@/services/session/sessionApi";
import { setSession } from "@/features/auth/authSlice";
import { useLocale } from "next-intl";

const Session = ({ children }) => {
  const locale = useLocale();

  const dispatch = useDispatch();
  const [createSession] = useCreateSessionMutation();
  const {
    data: sessionData,
    error: sessionError,
    isFetching
  } = usePersistSessionQuery({ locale });

  const session = useMemo(() => sessionData?.data || null, [sessionData]);
  console.log("session", session);
  useEffect(() => {
    if (!isFetching && session) {
      dispatch(setSession(session));
    } else if (!isFetching && sessionError) {
      createSession();
    }
  }, [dispatch, session, sessionError, createSession, isFetching]);

  return <>{children}</>;
};

export default Session;
