import Image from "next/image"

export default function BaseCard() {
    return (
        <>
            <div className="relative max-w-sm max-h-80">
                {/* Background warna main-color di belakang */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-(--main-color) rounded-2xl"></div>
                {/* Card putih */}
                <div className="relative bg-white p-6 rounded-2xl shadow-md">
                    {/* Image */}
                    <Image
                        src="/images/card-photo.png"
                        alt="Card Photo"
                        width={272}
                        height={182}
                    />
                    {/* Title */}
                    <p className="font-bold text-[20px]">
                        Title
                    </p>
                    <p className="text-[#898989] font-semibold text-[15px]">
                        tes
                    </p>
                    <p className="text-(--main-color) hover:underline text-[20px] font-bold">
                        Lihat Lebih Lanjut
                    </p>
                </div>
            </div>
        </>
    )
}