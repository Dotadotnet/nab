import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

function GoogleLogin() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const l = useTranslations("Login")
  const handleLogin = async () => {
    setIsSigningIn(true);
    toast.loading(l("WaitForLogin"), { id: "signup" });
    await signIn("google", { callbackUrl: `/${locale}` });
  };

  useEffect(() => {
    const error = searchParams.get("error");

    if (error) {
      setIsSigningIn(false);
      toast.error(`ورود با گوگل انجام نشد (${error}). اتصال سرور یا تنظیمات Google OAuth را بررسی کنید.`, {
        id: "signup"
      });
    }
  }, [searchParams]);

  return (
    <div>
      <div className="flex items-center justify-center gap-5 text-center">
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="flex items-center font-vazir w-64 h-10 dark:bg-gray-800 bg-slate-100 justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm "
          onClick={isSigningIn ? undefined : handleLogin}
        >
          <FcGoogle className="text-xl w-5 ml-1" />
          <span className="mx-1">{isSigningIn ? l("WaitForLogin") : l("GoogleLoginText")}</span>
        </motion.p>
      </div>
    </div>
  );
}

export default GoogleLogin;
