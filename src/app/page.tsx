'use client'
import Hero from "@/app/landing/page";
import Slider from "@/components/slider/page";
import Choose from "@/components/chose/page";
import Traditional from "@/components/traditional/page";
import Customer from "@/components/customer/Customer";
import Faq from "@/components/faq/page";


export default function Home() {
  return (
    <>
   
    <Hero/>
    <Slider/>
    <Choose/>
    <Faq/>
    <Traditional/> 
    <Customer/>
    
    </>
  );
}
