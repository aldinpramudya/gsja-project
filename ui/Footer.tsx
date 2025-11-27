"use client"

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-(--main-color) w-full md:h-80">
                    <div
                        className="
                max-w-7xl mx-auto pt-20 
                flex flex-col md:flex-row 
                items-center md:items-start 
                justify-center md:justify-around
                gap-10 md:gap-0
            "
                    >
                        {/* Block 1 */}
                        <div
                            className="
                    flex flex-col md:flex-row 
                    space-y-5 md:space-y-0 
                    md:space-x-10 
                    items-center
                    text-center md:text-left
                "
                        >
                            <div className="text-white">
                                <div className="flex space-x-4 justify-center md:justify-start text-[25px]">
                                    <FaInstagram />
                                    <FaFacebookF />
                                    <FaYoutube />
                                </div>

                                <div className="font-semibold pt-4 md:pt-8">
                                    <p>&#169; 2025. powered by</p>
                                    <p>GSJA JAWA TIMUR</p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={150}
                                    height={150}
                                    className="md:w-[180px] md:h-[180px]"
                                />
                            </div>
                        </div>
                        {/* Block 1 End */}

                        {/* Block 2 */}
                        <div
                            className="
                    text-white 
                    flex flex-col md:flex-row 
                    md:space-x-20
                    gap-10 md:gap-0
                    text-center md:text-left
                "
                        >
                            {footerLinks.map((section) => (
                                <div key={section.title}>
                                    <h3 className="text-lg font-bold mb-2 md:mb-4">{section.title}</h3>

                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="flex items-center justify-center md:justify-start gap-2 hover:underline"
                                                >
                                                    {link.icon && <span className="text-xl">{link.icon}</span>}
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Block 2 End */}
                    </div>
                </div>
            </footer>

        </>
    )
}