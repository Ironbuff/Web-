'use client'

import React, { useState } from 'react'
import profile from '../../../public/Blog.svg'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { BiBarChart, BiDollarCircle, BiEnvelope, BiFile, BiFolder, BiTime, BiUser } from 'react-icons/bi'

const Navbar = () => {

const navitems = [
        {
            id: 1, links: "", title: "Solution", icon: <IoIosArrowDown />, options: [
                { id: 1, links: "", title: "Overview", description: "Get an overview of all our solutions", icon: <BiFile size={22} className="text-cyan-500 text-xl" /> },
                { id: 2, links: "", title: "Account Payables", description: "Manage your accounts payables", icon: <BiDollarCircle size={22} className="text-cyan-500 text-xl" /> },
                { id: 3, links: "", title: 'Budgeting', description: "Plan and track your budget effectively", icon: <BiBarChart size={22} className="text-cyan-500 text-xl" /> },
                { id: 4, links: "", title: "Effortless Time Tracking", description: "Track time effortlessly with our system", icon: <BiTime size={22} className="text-cyan-500 text-xl" /> },
                { id: 5, links: "", title: "Account Receivables", description: "Track and manage your receivables", icon: <BiDollarCircle size={22} className="text-cyan-500 text-xl" /> },
                { id: 6, links: "", title: "Employees", description: "Manage your employee data", icon: <BiUser size={22} className="text-cyan-500 text-xl" /> },
                { id: 7, links: "", title: "Project Management", description: "Manage projects seamlessly", icon: <BiEnvelope size={22} className="text-cyan-500 text-xl" /> },
                { id: 8, links: "", title: "Ledger", description: "Maintain your financial ledger", icon: <BiFolder size={22} className="text-cyan-500 text-xl" /> },
                { id: 9, links: "", title: "Reporting", description: "Generate reports for insights", icon: <BiBarChart size={22} className="text-cyan-500 text-xl" /> },
            ], haschildren: true
        },
        { id: 2, links: "", title: "Company" },
        { id: 3, links: "", title: "Resources" },
        { id: 4, links: "", title: "Pricing" },
        { id: 5, links: "", title: "Contact" }
    ]


    const [mobilenav, setMobilenav] = useState(false)
    const [isdropped, setIsdropped] = useState<null|number>(null)


    return (
        <nav className='w-full relative flex  flex-row justify-between md:h-[12ch] h-[9ch] bg-white/50 md:px-28 px-5 md:shadow-transparent shadow-md '>

            {/* Image Section */}
            <div className='flex flex-row  w-fit items-center justify-between '>
                <Image alt="Logo-Section" src={profile} />
            </div>

            <div className={`md:flex md:items-center ${mobilenav ? "flex" : "hidden"} md:bg-transparent bg-white z-50 md:flex-row items-start  px-2 flex-col gap-y-6 absolute md:relative md:top-0 top-30 left-0  md:w-3/4 w-full md:h-full h-[calc(100vh-18ch)] justify-between`}>
                {/* navitems-section */}
                <ul className='list-none flex md:flex-row  flex-col gap-y-10 md:items-center items-start relative  font-normal justify-between gap-x-20 text-xl'>
                    {navitems.map((items) => (
                        <li key={items.id}>
                            {items.haschildren ? (

                                <a href={items.links} className='flex  font-extralight relative group items-center md:justify-center justify-between gap-x-3'>
                                    {items.title}
                                    <span className='group-hover:rotate-180 transition-all ease-in-out duration-300' 
                                    onMouseEnter={() => {
                                        setIsdropped(items.id)                                    
                                    }} 

                                   >
                                        {items.icon}
                                    </span>
                                    {
                                        isdropped ==items.id && (
                                            <ul className='md:absolute relative top-0 md:top-15 left-0 z-[50] md:w-[65rem] w-[20rem] h-[25ch] md:grid md:grid-cols-3 flex flex-col md:bg-neutral-50/90 bg-transparent px-8 py-10 space-x-3 rounded-2xl md:shadow-md shadow-transparent'>
                                                {items.options.map((items) => (
                                                    <li key={items.id} 
                                                    className='hover:bg-neutral-50 rounded-xl space-y-3 hover:shadow-sm flex items-center justify-start p-2  text-center transition-all ease-in-out duration-300'
                                                   >
                                                       <div 
                                                       className='flex flex-row gap-x-2 items-center justify-center'
                                                        onMouseLeave={()=>setIsdropped(null)}
                                                    >
                                                        {/* icon part */}
                                                        <div className='md:flex hidden items-center justify-center p-2 bg-cyan-600/10 rounded-xl'>
                                                            {items.icon}
                                                        </div>
                                                        <div className='flex flex-col items-start'>
                                                            <h1 className='md:text-base text-sm text-black'>
                                                                {items.title}
                                                            </h1>
                                                            <small className='md:flex hidden text-sm  font-extralight'>
                                                                {items.description}
                                                            </small>
                                                        </div>
                                                       </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    }

                                </a>

                            ) :
                                (
                                    <a href={items.links} className='flex font-extralight relative group items-center md:justify-center justify-between gap-x-3'>
                                        {items.title}
                                        <span className='absolute md:flex hidden left-0 top-10 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-[70] transition-all ease-in-out duration-300' />
                                    </a>

                                )
                            }

                        </li>

                    ))}

                </ul>

                {/* Getting Started */}

                <button className='border-1 md:w-fit w-full p-3 font-semibold rounded-xl md:border-neutral-800 border-transparent hover:md:bg-neutral-200 hover:bg-sky-800  transition-all ease-in-out duration-200 flex items-center flex-row justify-center md:bg-transparent bg-sky-700 md:text-black text-neutral-100 gap-x-2 group'>
                    Get Started
                    <span className='group-hover:translate-x-1 translate-x-0'>
                        <MdKeyboardArrowRight />
                    </span>
                </button>

            </div>

            <div className='md:hidden flex flex-row items-center justify-center'>
                <button className='p-2' onClick={() => setMobilenav(!mobilenav)}>
                    {mobilenav ? <FaX size={20} /> : <FaBars size={20} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar