export default function functionLogoChanger() {
    let theme = "dark"
    if (typeof window !== "undefined") {
        theme = document.documentElement.classList[0];
        const thame_rev = theme == "dark" ? "light" : "dark";
        document.querySelectorAll("img.logo-change-by-theme").forEach(img => {
            let exploded_src = img.src.split("/");
            exploded_src[exploded_src.length - 1] = exploded_src[exploded_src.length - 1].replace(theme, thame_rev);
            console.log(theme,thame_rev);
            
            img.src = exploded_src.join("/");
        })
    }

};