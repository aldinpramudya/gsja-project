import ListArtikel from "@/components/user/artikel/ListArtikel"
import TitlePageHero from "@/ui/TitlePageHero"

export default function Artikel() {
    return (
        <>
            <TitlePageHero title="Artikel" images="/banner/artikel-banner.png" />
            <div className="px-90 py-20">
                <div className="flex justify-center space-x-4 space-y-4">
                    <ListArtikel />
                </div>
            </div>
        </>
    )
}