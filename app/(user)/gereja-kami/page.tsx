import ListGereja from "@/components/user/gerejaKami/ListGereja"
import TitlePageHero from "@/ui/TitlePageHero"

export default function GerejaKami() {
    return (
        <>
            <TitlePageHero title="Gereja Kami" images="/banner/gereja-kami-banner.png" />
            <div className="px-90 py-20">
                <div className="flex justify-center flex-row flex-wrap space-x-4 space-y-4">
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                    <ListGereja />
                </div>
            </div>
        </>
    )
}