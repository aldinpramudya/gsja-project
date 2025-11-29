import BaseCard from "@/ui/BaseCard"
import BaseRedline from "@/ui/BaseRedline"
import Image from "next/image"

export default function MenuArticleComponents() {
    return (
        <>
            {/* Menu */}
            <div className="flex items-center space-x-10">
                <Image
                    src="/images/menu-photo.png"
                    alt="Menu Photo"
                    width={565}
                    height={545}
                />
                <div>
                    <div>
                        <BaseRedline width="20" height="2" />
                        <p className="text-(--main-color) uppercase font-bold text-[40px]">
                            menu
                        </p>
                    </div>
                    <div className="flex flex-row space-x-5 pt-5">
                        <BaseCard />
                        <BaseCard />
                        <BaseCard />
                    </div>
                </div>
            </div>
            {/* Article */}
            <div className="flex items-center justify-end space-x-10">
                <div>
                    <div className="flex flex-col items-end">
                        <BaseRedline width="20" height="2" />
                        <p className="text-(--main-color) uppercase font-bold text-[40px]">
                            artikel
                        </p>
                    </div>
                    <div className="flex flex-row space-x-5 pt-5">
                        <BaseCard />
                        <BaseCard />
                        <BaseCard />
                    </div>
                </div>
                <Image
                    src="/images/article-photo.png"
                    alt="Menu Photo"
                    width={565}
                    height={545}
                />
            </div>
        </>
    )
}