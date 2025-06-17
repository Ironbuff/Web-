'use client'

import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { getPrice } from '@/lib/pricing';


const PricingPlans = () => {




    interface price {
        name: string,
        popular: boolean,
        price: {
            monthly: string,
            yearly: string,
        }
        discount:number
        rate: string,
        purpose: string,
        features: string[]
    }


    const [billingCycle, setBillingCycle] = useState('yearly');
    const [darkmodefall, setDarkmodefall] = useState<null | number>(null)
    const [plans, setPlans] = useState<price[]>([])
    const[discount,setDiscount]= useState<number|null>(null)
   





    useEffect(() => {
        const fetch = async () => {
            const result = await getPrice()
            setPlans(result.data)
            const pro = result.data.find(item=>item.name==="Pro")
            const discount = pro?.discount
            setDiscount(discount)

        }


        fetch()
    }, [])



    return (
        <div className='lg:h-screen h-full lg:max-w-screen w-full px-28 py-10'>

            {/* Top Heading */}
            <div className='flex flex-col gap-y-5 items-center justify-center'>
                <h1 className='text-4xl font-bold '>
                    Plan and Pricing
                </h1>
                <p className='text-base font-extralight text-center'>
                    Recieve unlimited credits when you play yearly and save your plan
                </p>

                {/* Button Changes */}
                <div className='flex flex-row bg-white  shadow-md rounded-xl'>
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`text-base font-normal text-neutral-700 py-4 px-8 rounded-xl tansition-all ${billingCycle === 'monthly'
                            ? 'bg-black text-white shadow-sm font-semibold'
                            : 'text-gray-600 hover:text-gray-900'

                            }`}
                    >
                        Monthly
                    </button>
                    <div className='relative'>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`text-base font-normal text-neutral-700 py-4 px-8 rounded-xl tansition-all ${billingCycle === 'yearly'
                                ? 'bg-black text-white shadow-sm font-semibold'
                                : 'text-gray-600 hover:text-gray-900'

                                }`}
                        >
                            Yearly
                        </button >
                        {billingCycle === 'yearly'  && (
                            <small className='absolute top-0 right-0  h-fit text-neutral-50  font-extralight  p-1 rounded-xl w-fit bg-red-500 animate-pulse '>
                                Save {discount}%
                            </small>
                        )}

                    </div>
                </div>
            </div>

            {/* Bottom Heading */}
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto space-y-5  py-20'>
                {plans.map((item, index) => {

                    const darkmode = darkmodefall === index
                    return (
                        <div
                            key={index}
                            className={`flex flex-col gap-y-4 lg:max-w-6xl max-w-8xl items-start h-[480px] justify-center px-10  py-5 mx-6 rounded-xl shadow-lg group hover:scale-105 transition-all ease-in-out duration-300   ${darkmode ? "bg-neutral-800" : "bg-white"}`}
                            onMouseEnter={() => {
                                setDarkmodefall(index)
                            }}
                            onMouseLeave={() => {
                                setDarkmodefall(null)
                            }}
                        >
                            <h1 className={`flex flex-row gap-x-2 text-3xl font-semibold items-center w-full justify-start ${darkmode ? "text-white" : "text-black"} `}>
                                {item.name}
                                {item.popular === true && (
                                    <p className='p-1 bg-orange-500 rounded-xl text-sm  text-neutral-50 '>
                                        🔥Popular
                                    </p>
                                )}
                            </h1>

                            {/* Price Part */}
                            <div className='flex flex-col gap-y-2 py-3'>
                                {item.price && item.price?.yearly === "Custom" && item.price?.monthly === "Custom" ? (
                                    <div className={`text-3xl  font-semibold ${darkmode ? 'text-white' : 'text-gray-900'}`}>
                                        {billingCycle === 'yearly' ? item.price.yearly : item.price.monthly}
                                    </div>
                                ) : (
                                    <div className={`text-3xl font-semibold ${darkmode ? 'text-white' : 'text-gray-900'}`}>
                                        {billingCycle === 'yearly' ? item.price.yearly : item.price.monthly}
                                    </div>
                                )}
                                <p className={`text-sm ${darkmode ? "text-white" : "text-gray-900"}`}>
                                    {item.rate}
                                </p>

                            </div>

                            {/* Feature Description */}
                            <div className='flex flex-col gap-y-4'>
                                <h2 className={`text-xl  font-semibold py-3 ${darkmode ? "text-white" : "text-gray-900"}`}>
                                    {item.purpose}
                                </h2>
                                {/* Feature Listing */}
                                <ul className={`flex flex-col gap-y-1  ${darkmode ? "text-white" : "text-gray-900"}`}>
                                    {item.features.map((item, i) => (
                                        <li key={i} className={`flex flex-row gap-x-3 lg:text-base text-lg font-extralight items-center justify-start `}>
                                            <Check className='text-neutral-900 rounded-sm group-hover:bg-green-300  bg-neutral-200 ' /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button Part */}

                            <div className='w-full'>
                                <button className={` my-4 py-2 px-4 w-full shadow-md lg:text-lg  bg-neutral-700 group-hover:scale-105 rounded-xl ${darkmode ? "text-neutral-800 bg-white" : "text-neutral-300"}`} >
                                    Get started with {item.name}
                                </button>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default PricingPlans;