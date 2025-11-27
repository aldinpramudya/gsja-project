"use client"

import { navbarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// Icons
import { FaInstagram, FaFacebookF, FaYoutube, FaSearch } from "react-icons/fa";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex space-x-7">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={60}
                                    height={60}
                                />
                            </Link>
                            {/* Desktop Menu */}
                            <ul className="hidden md:flex pl-5 gap-10 items-center text-[15px]">
                                {navbarLinks.map((item) =>
                                    item.submenu ? (
                                        <li key={item.name} className="relative group">
                                            <span className="cursor-pointer hover:text-(--main-color) font-bold uppercase">
                                                {item.name}
                                            </span>
                                            {/* Submenu */}
                                            <ul className="absolute left-0 top-7 bg-(--main-color) w-50 shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all">
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link
                                                            href={sub.href}
                                                            className="block px-4 py-2 hover:bg-(--secondary-color) whitespace-nowrap text-white"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ) : (
                                        <li key={item.name} className="font-bold uppercase">
                                            <Link
                                                href={item.href!}
                                                className="hover:text-(--main-color) transition"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        {/* Icons */}
                        <div className="hidden md:flex items-center gap-4 pl-4 text-[20px]">
                            <FaSearch className="cursor-pointer text-(--main-color) hover:text-black" />
                            {/* Garis pemisah */}
                            <div className="h-10 w-px bg-gray-300" />
                            <FaInstagram className="cursor-pointer text-gray-600 hover:text-pink-600" />
                            <FaFacebookF className="cursor-pointer text-gray-600 hover:text-blue-600" />
                            <FaYoutube className="cursor-pointer text-gray-600 hover:text-red-600" />
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setMobileOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>


            {/* Mobile Open */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-(--main-color) text-white z-50 transform transition-transform duration-300 md:hidden
                ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between p-4">
                    <span className="text-xl font-bold">Menu</span>
                    <button
                        className="text-3xl"
                        onClick={() => setMobileOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                {/* MOBILE MENU ITEMS */}
                <ul className="flex flex-col gap-2 px-4 text-[17px]">
                    {navbarLinks.map((item) =>
                        item.submenu ? (
                            <li key={item.name}>
                                <details className="group">
                                    <summary className="cursor-pointer py-2 font-semibold uppercase">
                                        {item.name}
                                    </summary>
                                    <ul className="ml-4 mt-1">
                                        {item.submenu.map((sub) => (
                                            <li key={sub.name}>
                                                <Link
                                                    href={sub.href}
                                                    className="block py-2 hover:text-black"
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={item.name}>
                                <Link
                                    href={item.href!}
                                    className="block py-2 font-semibold uppercase hover:text-black"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* MOBILE SOCIAL ICONS */}
                <div className="flex gap-4 text-2xl mt-6 px-4">
                    <FaInstagram className="cursor-pointer hover:text-pink-300" />
                    <FaFacebookF className="cursor-pointer hover:text-blue-300" />
                    <FaYoutube className="cursor-pointer hover:text-red-300" />
                </div>
            </div>
        </>
    )

}