

import React from "react";
import Shipping from "../icons/Shipping";
import Return from "../icons/Return";
import Delivery from "../icons/Delivery";
import Policy from "../icons/Policy";
import { useTranslations } from "next-intl";

const Policies = () => {
    const t = useTranslations("Tools")
    const h = useTranslations("HomePage")
  
  const policies = [
    {
      title: t("SendFree"),
      detail: t("MinBuyForSendFree", { 0 : 500}),
      icon: <Shipping />,
      className: "bg-red-100",
      darkClassName: "dark:bg-rose-600 ",
    },
    {
      title: h("Policies2Title") ,
      detail: h("Policies2SubTitle") ,
      icon: <Return />,
      className: "bg-sky-100",
      darkClassName: "dark:bg-sky-600 ",
    },
    {
      title: h("Policies3Title") ,
      detail: h("Policies3SubTitle") ,
      icon: <Delivery />,
      className: "bg-green-100",
      darkClassName: "dark:bg-green-600 ",
    },
    {
      title: h("Policies4Title") ,
      detail: h("Policies4SubTitle") ,
      icon: <Policy />,
      className: "bg-amber-100",
      darkClassName: "dark:bg-amber-600 ",
    },
  ];

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {policies.map((policy, index) => (
        <div
          key={index}
          className={`flex flex-col gap-y-3 ${policy.className} ${policy.darkClassName} p-5 rounded-primary`}
        >
          {policy.icon}
          <article className="flex flex-col gap-y-0.5">
            <h2 className="text-lg">{policy.title}</h2>
            <p className="text-sm dark:text-gray-100">{policy.detail}</p>
          </article>  
        </div>
      ))}
    </section>
  );
};

export default Policies;
