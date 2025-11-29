"use client"

import Link from "next/link"
import { ReactNode } from "react"

// TO USE THIS BUTTON
// 1. as a link
// <Button href="/artikel">Lihat Artikel</Button>
// 2. as a Action Button
{/* <Button onClick={() => console.log("Clicked!")}>
  Klik Saya
</Button> */}
// 3. Add Styling Opsional
// <Button className="w-full text-center">Daftar Sekarang</Button>

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;

}

export default function Button({
    children,
    href,
    onClick,
    type = 'button',
    className = ''
}: ButtonProps) {
    const baseStyles = "px-6 py-3 font-semibold uppercase text-white rounded-lg transition active:translate-y-1";
    const styleEffects = "bg-(--main-color) shadow-[0_6px_0_var(--secondary-color)] active:shadow-[0_2px_0_var(--secondary-color)]";

    const mergedClass = `${baseStyles} ${styleEffects} ${className}`;

    if (href) {
        return (
            <>
                <Link href={href} className={mergedClass}>
                    {children}
                </Link>
            </>
        )
    }

    return (
        <button type={type} onClick={onClick} className={mergedClass}>
            {children}
        </button>
    )

}