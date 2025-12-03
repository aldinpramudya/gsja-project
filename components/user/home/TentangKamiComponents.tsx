import BaseRedline from "@/ui/BaseRedline"
import Button from "@/ui/Button"
import Image from "next/image"

export default function TentangKamiComponents() {
    return (
        <>
            <div className="flex justify-evenly space-x-8 px-70">
                <Image
                    src="/images/tentang-kami.png"
                    alt="Tentang Kami"
                    width={560}
                    height={654}
                />
                {/* Copywriting Tentang Kami */}
                <div>
                    <p className="text-[24px] font-bold text-(--main-color)">
                        Tentang Kami
                    </p>
                    <p className="capitalize font-bold text-[40px]">
                        satu hati, satu iman, satu keluarga
                    </p>
                    <div className="pt-5">
                        <BaseRedline width="50" height="2"/>
                    </div>
                    <p className="text-[20px] pt-5 text-[#898989]">
                        Kami menyambut anda dengan penuh sukacita di Gereja kami, Kami disini ingin membagikan kabar kasih Yesus Kristus kepada dunia
                    </p>
                    {/* Bible Verse */}
                    <div className="text-[24px] text-[#898989] pt-5">
                        <p>&quot;Tetapi aku menasihatkan kamu, saudara-saudara, demi nama Tuhan kita Yesus Kristus, supaya kamu seia sekata dan jangan ada perpecahan di antara kamu, tetapi sebaliknya supaya kamu erat bersatu dan sehati sepikir&quot;</p>
                        <p className="font-bold underline">1 Korintus 1:10</p>
                    </div>
                    {/* Bible Verse End */}
                    <div className="pt-10">
                        <Button href="tentang-kami">Kenali Kami Lebih !</Button>
                    </div>
                </div>
                {/* Copywriting Tentang Kami */}
            </div>
        </>
    )
}