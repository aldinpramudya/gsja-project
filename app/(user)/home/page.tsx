import EventHighlightCard from "@/components/user/home/EventHighlightCard"
import GerejaMapsComponents from "@/components/user/home/GerejaMapsComponents"
import TentangKamiComponents from "@/components/user/home/TentangKamiComponents"
import MenuArticleComponents from "@/components/user/home/MenuArticleComponents"
import TestimoniComponents from "@/components/user/home/TestimoniComponents"
import Button from "@/ui/Button"

export default function Home() {
    return (
        <>
            <div className="static">
                {/* Title Hero */}
                <div className="w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.png')" }}>
                    <div className="flex flex-col h-[300px] justify-center px-80 pt-20">
                        <div>
                            <div className="w-50 h-2 bg-white" />
                        </div>
                        <h1 className="text-white text-[64px] font-bold drop-shadow-lg capitalize">
                            datang, bertumbuh, dan bersukacita
                        </h1>
                        <p className="text-white text-[24px] capitalize">
                            setiap hari <span className="font-bold">minggu</span>
                        </p>
                        <p className="text-white italic text-[24px] capitalize">
                            kehadiran anda, sukacita kami !
                        </p>
                        {/* Button */}
                        <div className="pt-10">
                            <Button href="/kontak-kami">Bergabung Dengan Kami !</Button>
                        </div>
                        {/* Button End */}
                    </div>
                </div>
                {/* Title Hero End */}
                {/* Event Highlight List */}
                <div className="absolute top-115 left-0 right-0">
                    <div className="flex space-x-10 justify-center">
                        <EventHighlightCard />
                        <EventHighlightCard />
                        <EventHighlightCard />
                    </div>
                </div>
                <div className="mt-35 text-center">
                    <Button href="/kontak-kami">Lihat event lainnya !</Button>
                </div>
                {/* Event Highlight List End */}
            </div>
            {/* Kantor Pusat */}
            <div className="mt-20">
                <GerejaMapsComponents />
            </div>
            {/* Kantor Pusat End */}
            {/* Tentang Kami */}
            <div className="mt-20">
                <TentangKamiComponents />
            </div>
            {/* Tentang Kami End */}
            {/* Menu */}
            <div className="mt-30">
                <MenuArticleComponents />
            </div>
            {/* Menu End */}
            {/* Testimoni */}
            <div className="mt-30 py-20">
                <TestimoniComponents />
            </div>
            {/* Testimoni */}
        </>
    )
}