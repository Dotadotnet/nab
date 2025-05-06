import { cookies } from "next/headers";
const LogoChangeByTheme = async ({ alt , className, style, src, loading = null }) => {
    const cookieStore = await cookies()
    const theme = cookieStore.get('theme') ? cookieStore.get('theme').value : "dark";
    let exploded_src = null
    if (theme == "light") {
        exploded_src = src.split("/");
        exploded_src[exploded_src.length - 1] = exploded_src[exploded_src.length - 1].replace("dark", "light")
    } else {
        exploded_src = src.split("/");
        exploded_src[exploded_src.length - 1] = exploded_src[exploded_src.length - 1].replace("light", "dark")
    }
    let result_src = exploded_src.join("/")
    return (
        <img alt={alt} style={style} className={className + " logo-change-by-theme "} src={result_src} loading={loading} />
    );
};

export default LogoChangeByTheme;