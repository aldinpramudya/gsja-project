import Image from "next/image";
import BaseRedline from "@/ui/BaseRedline"

interface GerejaMapsProps {
    church_name: string;
    church_address: string;
    church_number: string;
    church_email: string;
    images: string;
}

export default function GerejaMapsComponents({
    church_name,
    church_address,
    church_number,
    church_email,
    images,
}: GerejaMapsProps) {
    return (
        // Container
        <div className="w-full h-[310px] px-30 shadow-2xl border border-(--main-color)">
            <div className="flex justify-around pt-15 gap-6 h-full items-center p-10">
                {/* Information Start */}
                <div className="flex-1">
                    <BaseRedline width="50" height="2" />
                    <p className="font-bold text-[34px]">{church_name}</p>
                    <p className="text-[24px]">{church_address}</p>

                    <div className="mt-6">
                        <p className="font-semibold">Hubungi Kami :</p>
                        <div className="flex space-x-5 font-semibold">
                            <p>{church_number}</p>
                            <p>{church_email}</p>
                        </div>
                    </div>
                </div>
                {/* Information End */}

                {/* Maps Section / Gambar Maps */}
                <div className="relative flex-1 h-full rounded-xl overflow-hidden">
                    <Image
                        src={images}
                        alt="Map"
                        fill
                        className="object-cover"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                {/* Maps End */}
            </div>
        </div>
        // Container
    )
}