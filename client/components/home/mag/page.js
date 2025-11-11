// import Image from "next/image";
import Container from "@/components/shared/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import React from "react";
import Posts from "./Mag";
import { getTranslations } from "next-intl/server";

const Post =async () => {
    const t = await getTranslations("HomePage");
  
  return (
    <section
      className="bg-no-repeat bg-contain bg-center h-full py-12 "
      
    >
      <Container>
        <div className="w-full h-full flex flex-col gap-y-12">
          <article className="flex flex-col gap-y-4">
            <h2 className="text-4xl w-fit">
              <HighlightText title={t("ReadFromUs")} center />
            </h2>
           
          </article>
          <div>
            <Posts />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Post;
