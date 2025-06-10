import React from "react";
import { BsApple } from "react-icons/bs";

const Footer = () => {
    const Products = [
        { id: 1, title: "About", links: "" },
        { id: 2, title: "Careers", links: "" },
        { id: 3, title: "General Inquires", links: "" },
        { id: 4, title: "Contact", links: "" },
    ];

    const Help = [
        { id: 1, title: "About", links: "" },
        { id: 2, title: "Careers", links: "" },
        { id: 3, title: "General Inquires", links: "" },
        { id: 4, title: "Contact", links: "" },
    ];

    const contact = [
        { id: 1, title: "www.sumx.ai" },
        { id: 2, title: "info@sumx.ai" },
        { id: 3, title: "Washington, D.C., USA" },
    ];

    return (
        <div className="bg-cyan-600 h-[30rem] w-full py-15 px-28 flex flex-col justify-between gap-y-5">

            {/* Top Footer */}
            <div className="flex flex-row h-2/3 w-full gap-x-3 justify-evenly  border-b border-b-neutral-900">
                {/* Subscribe Option */}
                <div className="w-1/3">
                    <div className="flex flex-col gap-y-4 text-neutral-50 w-full">
                        <h1 className="text-3xl font-semibold w-[80%] leading-relaxed tracking-wide">
                            Stay informed about our latest features and updates.
                        </h1>
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-row items-center w-2/3 justify-start relative">
                                    <input
                                        type="text"
                                        className="p-4 outline-none border border-neutral-100 bg-neutral-50 rounded-xl placeholder:text-neutral-800 w-full"
                                        placeholder="Enter Your Email"
                                    />
                                    <h2 className="px-5 py-5 bg-neutral-900 absolute top-0 right-0 text-neutral-50 rounded-xl">
                                        Subscribe{" "}
                                    </h2>
                                </div>
                                <span>Already subscribed by 8000+ People</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Detail */}
                <div className="w=1/4 text-neutral-50 space-x-3">
                    <h1 className="text-2xl py-3 font-semibold">Products</h1>
                    <ul className="flex flex-col gap-y-2">
                        {Products.map((item) => (
                            <li key={item.id} className="list-none  ">
                                <a href={item.links} className="text-xl ">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Help Detail */}
                <div className="w=1/4 text-neutral-50 space-x-3 ">
                    <h1 className="text-2xl py-3 font-semibold">Help Center</h1>
                    <ul className="flex flex-col gap-y-2">
                        {Help.map((item) => (
                            <li key={item.id} className="list-none  ">
                                <a href={item.links} className="text-xl ">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="w-fit text-neutral-50">
                    <h1 className="text-2xl py-3 font-semibold">Contact</h1>
                    <ul className="flex flex-col gap-y-2">
                        {contact.map((item) => (
                            <li key={item.id} className="text-xl">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* App Store */}
                <div className="flex flex-row gap-x-1 space-x-3 items-start justify-center w-fit rounded-xl  p-2 border-2 h-fit border-neutral-50 text-neutral-50">
                    <span className="flex items-center justify-center h-[50] ">
                        <BsApple size={30} className="text-neutral-50" />
                    </span>

                    <div className="flex flex-col gap-y-0 ">
                        <p className="text-base font-medium ">Download on the</p>
                        <h2 className="text-2xl font-semibold">
                            App Store
                        </h2>
                    </div>
                </div>


            </div>

            {/* Bottom Footer */}
            <div>

            </div>
        </div>
    );
};

export default Footer;
