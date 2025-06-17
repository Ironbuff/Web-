'use client'

import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { getfaq } from '@/lib/faq';

const Faq = () => {


    interface accordin{
        id:number,
        question:string,
        answer:string,
    }

    // const accordionData = [
    //     {
    //         id: "1",
    //         title: "What is SumX?",
    //         content: "SumX is an AI-integrated project management and accounting platform designed to streamline business operations, enhance productivity, and provide real-time insights for better decision-making."
    //     },
    //     {
    //         id: "2",
    //         title: "How does the AI integration work?",
    //         content: "Our AI system automates routine tasks, provides intelligent insights, predicts project outcomes, and helps optimize resource allocation. It learns from your data patterns to continuously improve recommendations and efficiency."
    //     },
    //     {
    //         id: "3",
    //         title: "What are the pricing plans?",
    //         content: "We offer flexible pricing starting at $10/user per month with no long-term commitments. Plans include Starter, Professional, and Enterprise tiers, each with different features and capabilities to match your business needs."
    //     },
    //     {
    //         id: "4",
    //         title: "How quickly can we implement SumX?",
    //         content: "Implementation is typically completed within 1-2 weeks. Our plug-and-play setup requires minimal training, and our support team provides comprehensive onboarding to ensure smooth adoption."
    //     },
    //     {
    //         id: "5",
    //         title: "Is SumX scalable for growing businesses?",
    //         content: "Absolutely! SumX is built to scale with your business. Whether you're a small startup or a large enterprise, our platform adapts to your changing needs with customizable features and flexible user management."
    //     }
    // ];

    const [accordionData,setAccordionData] = useState<accordin[]>([])

    useEffect(()=>{
        const fetch= async()=>{
            const result= await getfaq()
            setAccordionData(result.data)
        }
        fetch()
    },[])


    return (


        <div className='w-full h-[40rem] flex flex-col items-center justify-center gap-y-1 py-20'>

            {/* Heading  */}
            <div className='flex flex-col gap-y-2 items-center justify-center'>
                <h1 className='text-5xl font-bold leading-relaxed '>
                    Frequently Asked Question
                </h1>
                <p className='text-base leading-relaxed font-light'>
                    SumX is a next-generation Al-powered ERP solution designed to streamline
                </p>
            </div>
           <div className='flex flex-col gap-y-2 w-full h-screen items-center justify-center '>
            {accordionData.map((item) => (
                <Accordion
                    type="single"
                    collapsible
                    key={item.id}
                    className="w-full"
                >
                    <AccordionItem value={item.id.toString()} className='max-w-6xl mx-auto'>
                        
                        <div className='relative p-3'>
                        <AccordionTrigger  className="w-full group ">
                           <div className='flex flex-row justify-between items-center w-full'>
                             <h3 className='text-2xl font-base text-black '>
                              {item.question}
                             </h3>
                             <MdKeyboardArrowDown size={30} className=' transition-transform ease-in-out duration-300 group-data-[state=open]:rotate-180' />
                            </div>
                              <span className='absolute bottom-0 opacity-5 h-[1px] w-full bg-neutral-900 group-data-[state=open]:hidden flex'>

                              </span>
                        </AccordionTrigger>
                        </div>
                        
                        <AccordionContent className="flex flex-col gap-4 w-full items-center justify-center">
                            <p className='flex items-center justify-center w-full font-base text-lg p-3 bg-neutral-100 rounded-xl'>
                                {item.answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>



            ))}
           </div>
        </div>
    )
}

export default Faq