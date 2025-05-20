import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { auth, provider } from "@/config/firebaseConfig"; 
import { signInWithPopup } from "firebase/auth"; 
import { useSignUpGoogleMutation } from "@/services/auth/authApi";
import { useTranslations } from "next-intl";

function GoogleLogin() {
  const [signUp, { isLoading, error, data }] = useSignUpGoogleMutation();
  const l = useTranslations("Login")
  const t = useTranslations("Tools")
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    signUp({ idToken });
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading(l("WaitForLogin"), { id: "signup" });
    }

    if (data) {
      toast.success(data?.description, { id: "signup" });
      localStorage.setItem("accessToken", data?.accessToken);
      setTimeout(() => {
        window.open("/", "_self");
      }, 1000);
    }
    if (error?.data) {
      toast.error(error?.data?.description, { id: "signup" });
    }
  }, [isLoading, data, error]);

  return (
    <div>
      <div className="flex items-center justify-center gap-5 text-center">
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="flex items-center font-vazir w-64 h-10 dark:bg-gray-800 bg-slate-100 justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm "
          onClick={handleLogin}
        >
          <FcGoogle className="text-xl w-5 ml-1" />
          <span className="mx-1">{l("GoogleLoginText")}</span>
        </motion.p>
      </div>
    </div>
  );
}

export default GoogleLogin;
