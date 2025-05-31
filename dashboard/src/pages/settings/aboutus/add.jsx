
import React from "react";
import StepAddTeamMember from "./steps/StepAddTeamMember";
import Logo from "@/components/shared/logo/Logo";
import ToggleThemeButton from "@/components/ThemeToggle";
import BackButton from "@/components/shared/button/BackButton";

function AddTeamMember() {
  return (
    <section
      className={`relative bg-[#dce9f5] dark:bg-[#1a202c] h-screen w-screen overflow-hidden text-black dark:text-gray-300 min-h-screen flex justify-center items-center p-4`}
    >
      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="max-w-md w-full dark:bg-gray-800 bg-white flex flex-col gap-y-4 p-5 sm:p-8 rounded-primary shadow-lg z-10">
        <div className="flex flex-row items-center gap-x-2">
          <BackButton to={-1} />
        </div>
       
        <StepAddTeamMember />
        <ToggleThemeButton />
      </div>
    </section>
  );
}

export default AddTeamMember;
