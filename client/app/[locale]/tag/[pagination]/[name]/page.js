
import NotFound from "@/app/404";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import Main from "@/components/shared/layouts/Main";
import { Link } from "@/i18n/navigation";
import Pagination from "@/components/shared/pagination/PaginationUrl";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }
) {
  const name = params.name.replaceAll("-", " ")
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/tag/get-items/' + `${params.pagination}` + `/${name}`)
  const dat = await res.json();
  const data = dat.data;
 
  return {
    title: data.tag.title,
  }
}

export default async function Page({ params }) {
  const name = params.name.replaceAll("-", " ")
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/tag/get-items/' + `${params.pagination}` + `/${name}`)
  const dat = await res.json();
  const data = dat.data;

  const listItems = data.data.map((item) =>
    <Link key={data.tag._id} className="flex rounded-xl overflow-hidden my-2 w-80 bg-gray-200 shadow dark:shadow-white dark:bg-gray-900 " href={item.canonicalUrl ? item.canonicalUrl : "/"}>
      <img className="object-cover size-32 ml-2" src={item.thumbnail.url ? item.thumbnail.url : "/noimage.png"} />
      <div className="flex items-center">
        <h3 className="text-center text-lg sm:text-xl mx-3">
          {item.title}
        </h3>
      </div>
    </Link>
  );

  return (
    <>
      <Main>
        {
          dat.acknowledgement ?
            <>
              <div className="mx-10 mt-32 mb-24">

                <HighlightText title={data.tag.title} tag={true} /> {/* Fixed typo */}
                <div className="flex flex-wrap justify-around mt-8">
                  {listItems}
                </div>
              </div>

              
              <Pagination  scope={10} total={data.total} />


            </>
            : <NotFound />
        }
      </Main>
    </>
  );
}
