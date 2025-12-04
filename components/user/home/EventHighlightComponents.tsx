import EventHighlightCard from "./EventHighlightCard";
import Button from "@/ui/Button"

interface Event {
    id: number;
    name_event: string;
    slug_event: string;
    event_date: string;
}

interface ApiResponse {
    message: string;
    data: {
        current_page: number;
        data: Event[];
    };
}

async function getLatestEvent(): Promise<Event[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${apiUrl}/event`, {
            cache: 'no-store'
        })

        if (!response.ok) {
            return [];
        }

        const result: ApiResponse = await response.json();
        // Ambil 3 event terbaru
        return result.data.data.slice(0, 3);
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}


export default async function EventHighlightComponents() {
    const events = await getLatestEvent();

    if (events.length === 0) {
        return null; // Jangan tampilkan section jika tidak ada event
    }

    return (
        <>
            <div className="absolute top-115 left-0 right-0">
                <div className="flex space-x-10 justify-center flex-wrap gap-y-6 px-4">
                    {events.map((event) => (
                        <EventHighlightCard
                            key={event.id}
                            name_event={event.name_event}
                            slug_event={event.slug_event}
                            event_date={event.event_date}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-35 text-center">
                <Button href="/kalender-kegiatan">Lihat event lainnya !</Button>
            </div>
        </>


    );

}