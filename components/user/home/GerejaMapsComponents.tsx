import BaseRedline from "@/ui/BaseRedline"

export default function GerejaMapsComponents() {
    return (
        // Container
        <div className="w-full h-[310px] shadow-2xl border border-(--main-color)">
            <div className="flex justify-around pt-15">
                {/* Information Start */}
                <div>
                    <BaseRedline width="50" height="2" />
                    <p className="font-bold text-[34px]">
                        Sekolah Tinggi Teologi Satyabhakti
                    </p>
                    <p className="text-[24px]">
                        Jalan. Raya Karanglo No.94 - 103, Karanglo, Banjararum,
                    </p>
                    <p className="text-[24px]">
                        Kec. Singosari, Kabupaten Malang, Jawa Timur
                    </p>
                    <div className="mt-6">
                        <p>Hubungi Kami :</p>
                        <div className="flex space-x-5 font-semibold">
                            <p>+62 318217201</p>
                            <p> blabla@gmail.com </p>
                        </div>
                    </div>
                    {/* Information End */}
                </div>
                {/* Maps */}
                <div>
                    {/* GOOGLE MAPS EXTENSION WORKING ON IT */}
                </div>
                {/* Maps End */}
            </div>
        </div>
        // Container
    )
}