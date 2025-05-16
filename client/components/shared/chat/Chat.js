// pages/_app.js
"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

import { useLocale, useTranslations } from "next-intl";
import CustomChat from "./CustomChat";
import language from "@/app/language";
var loaded = false;
export default function Chat({ chatState , setChatState}) {
    const lang = useLocale();
    const t = useTranslations("CrispChat")
    const class_language = new language(lang);
    const info = class_language.getInfo();
    useEffect(() => {

        Crisp.configure("3eae038f-23ec-4a43-979d-d40ec67706d9", {
            locale: lang
        });
        
        setTimeout(() => {
            let chat_button = document.querySelector("span.cc-157aw");
            let function_edite = () => {
                let default_massage = document.querySelector('span.cc-10y2t span.cc-dvx9d');
                if (default_massage) {
                    default_massage.innerHTML = t("FirstChatMessage");
                }
                let text_above_chat = document.querySelector("span.cc-raag8.cc-co79q.cc-361jl");
                if (text_above_chat) {
                    text_above_chat.innerHTML = t("TextAboveChatBox");
                }
                let alerts = document.querySelectorAll('div.cc-1no03 a[role~=alert]');
                let links = document.querySelectorAll('div.cc-1no03 a[rel~=nofollow]');
                let input_email = document.querySelector('div.cc-1no03 input[name~=message_field_identity-email]');

                alerts.forEach(alert => {
                    alert.remove()
                });
                links.forEach(link => {
                    link.remove()
                });
                if (input_email) {
                    input_email.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove()
                }
                let all_elements = document.querySelectorAll('div.cc-1no03 *');
                all_elements.forEach(element => {
                    element.style.cssText += 'font-family:Vazir !important';
                });
                let option_button = document.querySelector('a.cc-8ve5w.cc-gge6o');
                if (option_button) {
                    option_button.remove();
                }
                let width_doc = document.body.clientWidth;
                let chat = document.querySelector('a.cc-1m2mf');
                let ping_div_chat = document.querySelector('div.ping-div-chat');
                if (document.querySelector("span.cc-157aw.cc-1kgzy")){
                    document.querySelector("span.cc-157aw.cc-1kgzy").style.cssText = "display : none !important;"     
                    if(chatState == "loading" && !loaded){
                        loaded = true;               

                        if(document.querySelector("div.cc-1no03") && document.querySelector("div.cc-1no03").dataset.visible == "true"){
                            setChatState("open")
                        }else{
                            setChatState("close")
                        }
                    }
                }
            }
            if (document.querySelector('section.loader-div')) {
                document.querySelector('section.loader-div').remove()
            }

            let interval = setInterval(() => {
                function_edite();
            }, 300);
        }, 500)
    }, []);
    return (  
        <div className={"fixed hidden md:inline-block bottom-2 z-50 rtl:right-12 right-28"}>
            <CustomChat chatState={chatState} setChatState={setChatState} />
        </div>
    );
}
