'use client'
import Navbar from "@/components/navbar/page";
import Hero from "@/page/landing/page";
import Contact from '@/page/contact/page'
import Footer from "@/components/footer/page";
import PricingPlans from "@/page/pricing/page";
import Slider from "@/components/slider/page";
import Choose from "@/components/chose/page";
import Traditional from "@/components/traditional/page";
import Customer from "@/components/customer/Customer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Contact/>
    <PricingPlans/>
    <Slider/>
    <Choose/>
    <Traditional/>
    <Customer/>
    <Footer/>
    </>
  );
}
