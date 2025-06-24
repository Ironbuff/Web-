'use client'

import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { getfaq } from '@/lib/faq';
import { useQuery } from '@tanstack/react-query';

const Faq = () => {


    interface accordin{
        id:number,
        question:string,
        answer:string,
    }

    

    const {data:accordionData=[]}= useQuery<accordin[]>({
        queryKey: ["accordionData"],
        queryFn:async()=>{
            const response = await getfaq()
            return response.data
        }
    })


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