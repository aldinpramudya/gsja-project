import PictureCard from "@/ui/PictureCard"
import { FaQuoteRight } from "react-icons/fa6";

export default function TestimoniComponents() {
    return (
        <>
            <div className="flex items-center justify-center px-20 py-10 gap-16">
                {/* Picture di tengah */}
                <div className="flex justify-center">
                    <PictureCard images="/images/picture-rounded.png"/>
                </div>

                {/* Teks di tengah */}
                <div className="flex flex-col justify-center max-w-2xl text-center">
                    <FaQuoteRight className="text-(--main-color) text-4xl mx-auto mb-4" />

                    <p className="text-[30px] leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus volutpat lobortis est quis auctor. Donec sodales
                        urna diam, nec tincidunt justo finibus non.
                    </p>

                    <p className="font-bold text-(--main-color) text-xl mt-4">
                        Pastor. Ronald
                    </p>
                </div>

            </div>
        </>
    )
}