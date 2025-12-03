import TitlePageHero from "@/ui/TitlePageHero"
import Image from "next/image";
import Link from "next/link";

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
    data: {
        current_page: number;
        data: Event[];
        total?: number;
        per_page?: number;
    };
}

async function getEvents(): Promise<Event[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${apiUrl}/event`, {
            cache: 'no-store'
        })
        if (!response.ok) {
            return [];
        }
        const result: ApiResponse = await response.json();
        return result.data.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export default async function KalenderKegiatan() {
    const events = await getEvents();

    if (events.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-600 mb-4">
                    Belum Ada Event
                </h1>
                <p className="text-gray-600">
                    Saat ini belum ada event yang tersedia.
                </p>
            </div>
        );
    }

    return (
        <>
            <TitlePageHero title="Kalender Kegiatan" images="/banner/kalender-kegiatan-banner.png" />
            <div className="px-90 py-20">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <Image
                                    src={event.image_banner_event}
                                    alt={event.name_event}
                                    fill
                                    className="object-cover"
                                    unoptimized={process.env.NODE_ENV === 'development'}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-between">
                                {/* Title */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">
                                        {event.name_event}
                                    </h2>

                                    {/* Event Info */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-(--main-color) mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-gray-700">
                                                {formatDate(event.event_date)}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-(--main-color) mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-gray-700">
                                                {event.event_place}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-(--main-color) mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="text-gray-700">
                                                {event.event_contact}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {event.description_event}
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="flex gap-4">
                                    <Link
                                        href={`/event/${event.slug_event}`}
                                        className="flex-1 bg-(--main-color) text-white py-3 px-6 rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
                                    >
                                        Lihat Detail
                                    </Link>
                                    {event.link_event && (
                                        <a
                                            href={event.link_event}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 border-2 border-(--main-color) text-(--main-color) py-3 px-6 rounded-lg font-bold text-center hover:bg-(--main-color) hover:text-white transition-colors"
                                        >
                                            Daftar Sekarang
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}