import GerejaMapsComponents from "@/components/user/home/GerejaMapsComponents";
import PictureCard from "@/ui/PictureCard";
import TitlePageHero from "@/ui/TitlePageHero"

export default async function GerejaDetail({
    params
}: {
    params: Promise<{ gerejaId: string }>;
}) {
    const productId = (await params).gerejaId;

    return (
        <div>
            <TitlePageHero title={productId} images="/banner/gereja-kami-banner.png" />
            <GerejaMapsComponents />
            <div className="flex justify-center py-10">
                <div>
                    <PictureCard />
                    <div className="pt-10 text-[24px] text-center">
                        <p>Pastor yang melayani :</p>
                        <p className="text-(--main-color) font-bold">Pdt. Arnold</p>
                    </div>
                </div>
            </div>
        </div>
    )
}