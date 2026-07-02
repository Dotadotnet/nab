
"use client";

import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { usePersistLoginQuery } from "@/services/auth/authApi";
import { setUser } from "@/features/auth/authSlice";
import { useSession } from "next-auth/react";


const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { data: nextAuthSession } = useSession();
  const [accessToken, setAccessToken] = useState(null);
  const { data: userData, error: userError } = usePersistLoginQuery(undefined, {
    skip: !accessToken
  });
  const user = useMemo(() => userData?.data || {}, [userData]);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!nextAuthSession?.accessToken) return;

    localStorage.setItem("accessToken", nextAuthSession.accessToken);
    setAccessToken(nextAuthSession.accessToken);
  }, [nextAuthSession?.accessToken]);

  useEffect(() => {
    if (userData && !userError) {
      dispatch(setUser(user));
    }

    if (userError?.data) {
    }
  }, [userData, userError, dispatch, user]);

  return <>{children}</>;
};

export default Auth;
