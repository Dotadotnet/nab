// pages/_app.js
"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

import { useLocale, useTranslations } from "next-intl";
import CustomChat from "./CustomChat";
import language from "@/app/language";
var loaded = false;
export default function Chat({ chatState, setChatState }) {
    const lang = useLocale();
    const t = useTranslations("CrispChat")
    const class_language = new language(lang);
    const info = class_language.getInfo();
    useEffect(() => {

		Crisp.configure("3eae038f-23ec-4a43-979d-d40ec67706d9", {
			locale: lang
		});
		Crisp.setColorTheme("red");

		// Bind Crisp lifecycle events to drive UI state instead of DOM polling
		const hideCrispButtonById = () => {
			const btn = document.getElementById('crisp-chatbox-button');
			if (btn) {
				btn.style.setProperty('display', 'none', 'important');
			}
		};
		const onSessionLoaded = () => {
			if (chatState === "loading" && !loaded) {
				loaded = true;
				setChatState("close");
			}
			hideCrispButtonById();
		};
		const onChatOpened = () => setChatState("open");
		const onChatClosed = () => setChatState("close");
		try {
			window.$crisp?.push(["on", "session:loaded", onSessionLoaded]);
			window.$crisp?.push(["on", "chat:opened", onChatOpened]);
			window.$crisp?.push(["on", "chat:closed", onChatClosed]);
		} catch (_) {}

		// Inject CSS to hide only the Crisp launcher icon, not the chatbox
		const style = document.createElement('style');
		style.setAttribute('data-crisp-launcher-hide', 'true');
		style.innerHTML = `.crisp-client span.cc-157aw{display:none !important}`;
		document.head.appendChild(style);

		// Add a fallback to leave loading state even if Crisp events fail
		const loadingFallback = setTimeout(() => {
			if (chatState === "loading" && !loaded) {
				loaded = true;
				setChatState("close");
			}
		}, 5000);

		let pollTimeout;
		let interval;
		pollTimeout = setTimeout(() => {
            let chat_button = document.querySelector("span.cc-157aw");
			let function_edite = () => {
				hideCrispButtonById();
                let button_close = document.querySelector("span.cc-9nfaa.cc-17cww");
                if (button_close) {
                    button_close.addEventListener("click", () => {
                        setChatState("close")
                    })
                }

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
                if (document.querySelector("div.cc-1no03")) {                    
                    if (screen.width > 480) {
                        document.querySelector("div.cc-1no03").style.cssText = "width: 320px !important; bottom: 117px !important;"
                    } else {
                        document.querySelector("div.cc-1no03").style.cssText = "width: 100% !important; bottom: 0px !important;"
                    }
                }
                if (document.querySelector("div.cc-rfbfu") && screen.width > 480)
                    document.querySelector("div.cc-rfbfu").style.cssText += "height: 400px !important;"


                if (document.querySelector("span.cc-157aw.cc-1kgzy")) {
                    document.querySelector("span.cc-157aw.cc-1kgzy").style.cssText = "display : none !important;"
                    if (chatState == "loading" && !loaded) {
                        loaded = true;

                        if (document.querySelector("div.cc-1no03") && document.querySelector("div.cc-1no03").dataset.visible == "true") {
                            setChatState("open")
                        } else {
                            setChatState("close")
                        }
                    }
                }

            }


            if (document.querySelector('section.loader-div')) {
                document.querySelector('section.loader-div').remove()
            }

			interval = setInterval(() => {
                function_edite();
			}, 300);
			// Safety stop after 10s to avoid endless polling if Crisp DOM changes
			setTimeout(() => {
				if (interval) clearInterval(interval);
			}, 10000);
		}, 500)

		return () => {
			try {
				window.$crisp?.push(["off", "session:loaded", onSessionLoaded]);
				window.$crisp?.push(["off", "chat:opened", onChatOpened]);
				window.$crisp?.push(["off", "chat:closed", onChatClosed]);
			} catch (_) {}
			if (pollTimeout) clearTimeout(pollTimeout);
			if (interval) clearInterval(interval);
			clearTimeout(loadingFallback);
			const s = document.querySelector('style[data-crisp-launcher-hide="true"]');
			if (s) s.remove();
		};
	}, []);

	// Sync our state with Crisp actions so we never need Crisp's launcher
	useEffect(() => {
		try {
			if (chatState === "open") {
				window.$crisp?.push(["do", "chat:open"]);
			} else if (chatState === "close") {
				window.$crisp?.push(["do", "chat:close"]);
			}
		} catch (_) {}
	}, [chatState]);
    return (
        <div className={"fixed hidden md:inline-block bottom-2 z-50 rtl:right-12 right-28"}>
            <CustomChat chatState={chatState} setChatState={setChatState} />
        </div>
    );
}
