import Hero from "@/components/home/hero/Hero";
import Banner2 from "@/components/home/Banner2";
import Banner3 from "@/components/home/Banner3";
import ExpertChoice from "@/components/home/ExpertChoice";
import NicheExplorer from "@/components/home/NicheExplorer";
import Trending from "@/components/home/Trending";
import Main from "@/components/shared/layouts/Main";
import Post from "@/components/home/posts/Post";
import Blog from "@/components/home/blogs/page";
import Gallery from "@/components/home/gallery/Gallery";
import NewArrivals from "@/components/home/newArrivals/page";
import NewsLetter from "@/components/home/news-letter/NewsLetter";

export default async function Home({ params }) {
  return (
    <>
      <Main>
        <Hero />
        <NewArrivals params={params} />
        <Banner2 params={params} />
        {/* <Trending params={params} /> */}
        <ExpertChoice params={params} />
        <Post params={params} />
        <Gallery />
        <NewsLetter />
      </Main>
    </>
  );
}
