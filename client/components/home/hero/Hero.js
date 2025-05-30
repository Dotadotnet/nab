import KeyServices from "@/app/[locale]/Policies/Policies";
import Banner1 from "./Banner1";
import Container from "@/components/shared/Container";
import Category from "./Category";

const Hero = () => {
  const options = [
    {
      id: 1,
      src: "/image/1.webp",
      title: "نقل بادامی",
      description: "نقل بادامی شیرین و نرم، مناسب مهمانی‌ها",
      price: "2,000,000"
    },
    {
      id: 2,
      src: "/image/2.png",
      title: "نقل نارگیلی",
      description: "نقل با طعم نارگیل و بافت لطیف",
      price: "1,800,000"
    },
    {
      id: 3,
      src: "/image/3.png",
      title: "نقل گل‌سرخ",
      description: "نقل معطر شده با گل‌سرخ طبیعی",
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
