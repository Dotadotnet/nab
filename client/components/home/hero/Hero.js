import KeyServices from "@/app/[locale]/Policies/Policies";
import Banner1 from "./Banner1";
import Container from "@/components/shared/Container";
import Category from "./Category";

const Hero = () => {
  const options = [
    {
      id: 4,
      src: "/image/4.png",
      title: "نقل گل سرخ",
      description: "نقل سنتی با طعم گل سرخ، مناسب برای مجالس و هدیه",
      price: "2,000,000"
    },
    {
      id: 1,
      src: "/image/1.webp",
      title: "نقل زعفرانی",
      description: "ترکیبی از زعفران خالص و بادام در یک شیرینی لطیف",
      price: "2,000,000"
    },
    {
      id: 2,
      src: "/image/2.png",
      title: "نقل گردوئی",
      description: "نقل سنتی با مغز گردو، خوش‌طعم و مقوی برای پذیرایی",
      price: "1,800,000"
    },
    {
      id: 3,
      src: "/image/3.png",
      title: "نقل خلال بیدمشک",
      description: "نقل لطیف با عطر بیدمشک طبیعی، آرامش‌بخش و خاص",
      price: "2,200,000"
    },
    {
      id: 5,
      src: "/image/5.png",
      title: "حلوای گردوئی",
      description: "حلوای غنی شده با گردوی تازه و شیرین، مخصوص عصرانه",
      price: "1,800,000"
    },
    {
      id: 6,
      src: "/image/6.webp",
      title: "حلوای پسته",
      description: "حلوای مجلسی با مغز پسته فراوان، مناسب مهمانی‌ها",
      price: "2,200,000"
    }
  ];

  return (
    <section className=" mt-24">
      <Container className=" px-1 lg:px-primary gap-y-4">
        <Banner1 options={options} />
        <KeyServices />
        <Category />
      </Container>
    </section>
  );
};

export default Hero;
