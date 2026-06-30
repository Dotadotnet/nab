// pages/_app.js
"use client";
import { useEffect, useRef } from "react";
import { Crisp } from "crisp-sdk-web";

import { useLocale, useTranslations } from "next-intl";
import CustomChat from "./CustomChat";
import language from "@/app/language";

const CRISP_LAUNCHER_STYLE_ID = "nab-hide-crisp-launcher";
const CRISP_LAUNCHER_SELECTORS =
	"#crisp-chatbox a.cc-unoo, #crisp-chatbox span.cc-157aw.cc-1kgzy, #crisp-chatbox span.cc-1gfkz";

function hideCrispLauncher() {
	if (typeof document === "undefined") return;

	if (!document.getElementById(CRISP_LAUNCHER_STYLE_ID)) {
		const style = document.createElement("style");
		style.id = CRISP_LAUNCHER_STYLE_ID;
		style.textContent = `
			#crisp-chatbox a.cc-unoo,
			#crisp-chatbox span.cc-157aw.cc-1kgzy,
			#crisp-chatbox span.cc-1gfkz {
				display: none !important;
				opacity: 0 !important;
				pointer-events: none !important;
				visibility: hidden !important;
			}
		`;
		document.head.appendChild(style);
	}

	document
		.querySelectorAll(CRISP_LAUNCHER_SELECTORS)
		.forEach((element) => {
			element.style.setProperty("display", "none", "important");
			element.style.setProperty("opacity", "0", "important");
			element.style.setProperty("pointer-events", "none", "important");
			element.style.setProperty("visibility", "hidden", "important");
		});
}

function watchCrispLauncher() {
	if (typeof document === "undefined" || typeof MutationObserver === "undefined") {
		return () => {};
	}

	let rafId = null;
	const hideSoon = () => {
		if (rafId) return;
		rafId = window.requestAnimationFrame(() => {
			rafId = null;
			hideCrispLauncher();
		});
	};

	const observer = new MutationObserver(hideSoon);
	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ["class", "style", "data-visible"],
		childList: true,
		subtree: true
	});
	hideSoon();

	return () => {
		if (rafId) window.cancelAnimationFrame(rafId);
		observer.disconnect();
	};
}

export default function Chat({ chatState, setChatState }) {
    const lang = useLocale();
    const t = useTranslations("CrispChat");
    const class_language = new language(lang);
    const info = class_language.getInfo();
    const loadedRef = useRef(false);

    useEffect(() => {
		const stopWatchingCrispLauncher = watchCrispLauncher();
		hideCrispLauncher();
		Crisp.configure("3eae038f-23ec-4a43-979d-d40ec67706d9", {
			locale: lang
		});
		Crisp.setColorTheme("red");
		Crisp.chat.hide();
		hideCrispLauncher();

		const onSessionLoaded = () => {
			if (!loadedRef.current) {
				loadedRef.current = true;
				setChatState("close");
			}
			Crisp.chat.hide();
			hideCrispLauncher();
		};
		const onChatOpened = () => {
			setChatState("open");
			hideCrispLauncher();
		};
		const onChatClosed = () => {
			setChatState("close");
			hideCrispLauncher();
		};
		try {
			window.$crisp?.push(["on", "session:loaded", onSessionLoaded]);
			window.$crisp?.push(["on", "chat:opened", onChatOpened]);
			window.$crisp?.push(["on", "chat:closed", onChatClosed]);
		} catch (_) {}

		// Leave loading state even if Crisp events fail.
		const loadingFallback = setTimeout(() => {
			if (!loadedRef.current) {
				loadedRef.current = true;
				setChatState("close");
				Crisp.chat.hide();
				hideCrispLauncher();
			}
		}, 5000);

		let pollTimeout;
		let interval;
		pollTimeout = setTimeout(() => {
			let function_edite = () => {
				hideCrispLauncher();
                let button_close = document.querySelector("span.cc-9nfaa.cc-17cww");
                if (button_close && !button_close.dataset.customChatBound) {
                    button_close.dataset.customChatBound = "true";
                    button_close.addEventListener("click", () => {
                        setChatState("close");
                    });
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
                if (document.querySelector("div.cc-1no03")) {                    
                    if (screen.width > 480) {
                        document.querySelector("div.cc-1no03").style.cssText = "width: 320px !important; bottom: 117px !important;";
                    } else {
                        document.querySelector("div.cc-1no03").style.cssText = "width: 100% !important; bottom: 0px !important;";
                    }
                }
                if (document.querySelector("div.cc-rfbfu") && screen.width > 480)
                    document.querySelector("div.cc-rfbfu").style.cssText += "height: 400px !important;";


                if (document.querySelector("span.cc-157aw.cc-1kgzy")) {
                    hideCrispLauncher();
                    if (!loadedRef.current) {
                        loadedRef.current = true;

                        if (document.querySelector("div.cc-1no03") && document.querySelector("div.cc-1no03").dataset.visible == "true") {
                            setChatState("open");
                        } else {
                            setChatState("close");
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
			stopWatchingCrispLauncher();
		};
	}, [lang, setChatState, t]);

	// Sync our state with Crisp actions so we never need Crisp's launcher
	useEffect(() => {
		try {
			if (chatState === "open") {
				Crisp.chat.show();
				window.$crisp?.push(["do", "chat:open"]);
				hideCrispLauncher();
				setTimeout(hideCrispLauncher, 100);
				setTimeout(hideCrispLauncher, 500);
			} else if (chatState === "close") {
				window.$crisp?.push(["do", "chat:close"]);
				Crisp.chat.hide();
				hideCrispLauncher();
				setTimeout(hideCrispLauncher, 100);
			}
		} catch (_) {}
	}, [chatState]);
    return (
        <div className={"fixed hidden md:inline-block bottom-2 z-50 rtl:right-12 right-28"}>
            <CustomChat chatState={chatState} setChatState={setChatState} />
        </div>
    );
}
