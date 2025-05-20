import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";
import Locations from "./Locations";



export default async function Contact() {
    const c = await getTranslations("ContactUs");
   const locations = [
      
        {
            country: c("CityUrmia"),
            address: c("Address")  ,
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d373.15305293723105!2d45.07099440279554!3d37.561305347499825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1747496405393!5m2!1sen!2s",
            image: "/image/login_image_1.jpg",
        }
    ];
 

 

  return (
    <Main>
        <ContactForm/>
         <Locations locations={locations} />
         <br />
    </Main>
  );
}
