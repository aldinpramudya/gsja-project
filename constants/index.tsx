// Navbar Link Menu
export const navbarLinks = [
    {
        name: "Gereja",
        submenu: [
            {
                name: "Tentang Kami",
                href: "/tentang-kami"
            },
            {
                name: "Gereja Kami",
                href: "/gereja-kami"
            }
        ]
    },
    {
        name: "Events",
        href: "/kalender-kegiatan"
    },
    {
        name: "Artikel",
        href: "/artikel"
    },
    {
        name: "Pengurus Daerah",
        href: "/susunan-panitia"
    },
    {
        name: "Kontak Kami",
        href: "/kontak-kami"
    },
]

// Navbar Link Menu End

// Footer Link Menu
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const footerLinks = [
    {
        title: "Tentang Kami",
        links: [
            { name: "Siapa Kami", href: "/tentang-kami" },
            { name: "Gereja Kami", href: "/gereja-kami" },
            { name: "Artikel", href: "/artikel" },
            { name: "Susunan Panitia", href: "/susunan-panitia" }
        ]
    },
    {
        title: "Events",
        links: [
            { name: "Kalender Kegiatan", href: "/kalender-kegiatan" },
        ]
    },
    {
        title: "Kontak Kami",
        links: [
            { name: "WhatsApp", href: "https://wa.me/", icon: <FaWhatsapp /> },
            { name: "Email", href: "mailto:/", icon: < MdEmail /> }
        ]
    }
];

// Footer Link Menu End