import ListArtikel from "@/components/user/artikel/ListArtikel"
import TitlePageHero from "@/ui/TitlePageHero"

export default function Artikel() {
    return (
        <>
            <TitlePageHero title="Artikel" images="/banner/artikel-banner.png" />
            <div className="px-90 py-20">
                <div className="flex flex-row justify-center space-x-5 pt-5">
                    <div className="flex space-x-11">
                        <ListArtikel />
                    </div>
                </div>
            </div>
        </>
    )
}