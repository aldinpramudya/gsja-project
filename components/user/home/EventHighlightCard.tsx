import Link from "next/link";
import { IoMdPin } from "react-icons/io";

interface EventHighlightsCardProps {
    name_event: string;
    slug_event: string;
    event_date: string;
}



export default function EventHighlightCard({
    name_event,
    slug_event,
    event_date,
}: EventHighlightsCardProps) {
    const date = new Date(event_date);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    const time = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="w-[518px] h-[152px] bg-white rounded-xl shadow-2xl">
            <div className="px-10 py-5 flex space-x-5">
                {/* Card Time and Date */}
                <div className="flex space-x-4 items-center">
                    <div className="relative flex justify-start">
                        <IoMdPin className="absolute bottom-15 left-6 text-(--main-color) text-[50px]" />
                        <div className="w-[93px] h-[90px] bg-[#FFEEF1] rounded-xl">
                            <p className="flex justify-center pt-10 text-(--main-color) text-[17px] font-semibold">
                                {month} {day}
                            </p>
                            <div className="bg-(--main-color) mt-5 rounded-b-2xl text-white text-center font-semibold">
                                {time}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event Details */}
                <div className="pt-4">
                    <p className="font-bold">
                        Event : {name_event}
                    </p>
                    <Link
                        href={`/kalender-kegiatan/${slug_event}`}
                        className="text-(--main-color) font-bold hover:underline"
                    >
                        Detail Event
                    </Link>
                </div>
                {/* Event Details End */}
                {/* Card Time and Date End */}
            </div>
        </div>
    )
}