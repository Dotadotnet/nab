import React from "react";
import Container from "../shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Banner3 = ({ className }) => {
  const h = useTranslations("HomePage");
  const t = useTranslations("Tools");

  return (
    <Container className={className ? className : ""}>
      <div className="banner">
        <div className="imagen"></div>
        <img src="https://img.icons8.com/color-glass/48/000000/egg-basket.png" />
        <h1>Título maior</h1>
        <p>Subtítulo menor</p>
        <button>Botão principal</button>
      </div>
    </Container>
  );
};

export default Banner3;
