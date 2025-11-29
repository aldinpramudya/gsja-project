import { IoMdPin } from "react-icons/io";

export default function EventHighlightCard() {
    return (
        <div className="w-[518px] h-[152px] bg-white rounded-xl shadow-2xl">
            <div className="px-10 py-5 flex space-x-5">
                {/* Card Time and Date */}
                <div className="flex space-x-4 items-center">
                    <div className="relative flex justify-start">
                        <IoMdPin className="absolute bottom-15 left-6 text-(--main-color) text-[50px]" />
                        <div className="w-[93px] h-[90px] bg-[#FFEEF1] rounded-xl">
                            <p className="flex justify-center pt-10 text-(--main-color) text-[17px] font-semibold">
                                Aug 12
                            </p>
                            <div className="bg-(--main-color) mt-5 rounded-b-2xl text-white text-center font-semibold">
                                08:00 PM
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event Details */}
                <div className="pt-4">
                    <p className="font-bold">
                        Event : Kebaktian Kebangunan Rohani : Find Yourself !
                    </p>
                    <p className="text-(--main-color) font-bold hover:underline">
                        Detail Event
                    </p>
                </div>
                {/* Event Details End */}
                {/* Card Time and Date End */}
            </div>
        </div>
    )
}