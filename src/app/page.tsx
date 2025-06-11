import Navbar from "@/components/navbar/page";
import Hero from "@/page/landing/page";
import Contact from '@/page/contact/page'
import Footer from "@/components/footer/page";
import PricingPlans from "@/page/pricing/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Contact/>
    <PricingPlans/>
    <Footer/>
    </>
  );
}
