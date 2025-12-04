import TitlePageHero from "@/ui/TitlePageHero";
import Link from "next/link";

import { MdDateRange, MdPlace, MdOutlineWhatsapp } from "react-icons/md";

interface Event {
    id: number;
    name_event: string;
    slug_event: string;
    image_banner_event: string;
    link_event: string;
    description_event: string;
    event_date: string;
    event_place: string;
    event_contact: string;
    created_at: string;
    updated_at: string;
    is_visible: number;
}

interface ApiResponse {
    message: string;
    data: Event;
}

async function getEvent(slug: string): Promise<Event | null> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(
            `${apiUrl}/event/${slug}`,
            {
                cache: 'no-store'
            }
        );

        if (!response.ok) {
            return null;
        }

        const result: ApiResponse = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error Fetching Event:', error);
        return null;
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export default async function EventDetail({
    params
}: {
    params: Promise<{ event: string }>;
}) {
    const eventSlug = (await params).event;
    const event = await getEvent(eventSlug);

    if (!event) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Event Tidak Ditemukan
                </h1>
                <p className="text-gray-600 mb-8">
                    Event yang Anda cari tidak tersedia.
                </p>
                <Link
                    href="/event"
                    className="bg-(--main-color) text-white py-3 px-8 rounded-lg font-bold hover:opacity-90 transition-opacity inline-block"
                >
                    Kembali ke Daftar Event
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Banner */}
                <TitlePageHero title="Event" images={event.image_banner_event} />
                {/* Content */}
                <div className="px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-3">
                            {/* Main Content */}
                            <div className="md:col-span-2">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-(--main-color)">
                                        Nama Event
                                    </h2>
                                    <p className="text-gray-700 font-bold text-[50px] leading-relaxed whitespace-pre-line">
                                        {event.name_event}
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <h2 className="text-2xl font-bold mb-4 text-(--main-color)">
                                        Tentang Event
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {event.description_event}
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="md:col-span-1 pl-7">
                                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                                    <h3 className="text-xl font-bold mb-6 text-(--main-color)">
                                        Informasi Event
                                    </h3>

                                    <div className="space-y-4">
                                        {/* Date & Time */}
                                        <div className="flex items-start gap-3">
                                            <div className="bg-(--main-color) bg-opacity-10 p-3 rounded-lg">
                                                <MdDateRange color="white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Tanggal & Waktu</p>
                                                <p className="font-semibold text-gray-800">
                                                    {formatDate(event.event_date)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start gap-3">
                                            <div className="bg-(--main-color) bg-opacity-10 p-3 rounded-lg">
                                                <MdPlace color="white"/>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Lokasi</p>
                                                <p className="font-semibold text-gray-800">
                                                    {event.event_place}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="flex items-start gap-3">
                                            <div className="bg-(--main-color) bg-opacity-10 p-3 rounded-lg">
                                                <MdOutlineWhatsapp color="white"/>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Kontak</p>
                                                <a
                                                    href={`tel:${event.event_contact}`}
                                                    className="font-semibold text-(--main-color) hover:underline"
                                                >
                                                    {event.event_contact}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-8 space-y-3">
                                        {event.link_event && (
                                            <a
                                                href={event.link_event}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full bg-(--main-color) text-white py-3 px-6 rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
                                            >
                                                Daftar Sekarang
                                            </a>
                                        )}
                                        <a
                                            href={`https://wa.me/${event.event_contact.replace(/\D/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full border-2 border-(--main-color) text-(--main-color) py-3 px-6 rounded-lg font-bold text-center hover:bg-(--main-color) hover:text-white transition-colors"
                                        >
                                            Hubungi via WhatsApp
                                        </a>
                                        <Link
                                            href="/kalender-kegiatan"
                                            className="block w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-bold text-center hover:bg-gray-300 transition-colors"
                                        >
                                            Kembali ke Daftar Event
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}