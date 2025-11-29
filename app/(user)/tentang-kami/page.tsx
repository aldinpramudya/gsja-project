import BaseRedline from "@/ui/BaseRedline"
import TitlePageHero from "@/ui/TitlePageHero"

export default function TentangKami() {
    return (
        <>
            <TitlePageHero title="Tentang Kami" images="/banner/tentang-kami-banner.png" />
            <div className="px-90 py-20">
                <p className="text-[20px] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis vel urna iaculis luctus.
                    Suspendisse feugiat feugiat ante, convallis dapibus lacus mattis at. Aliquam eu tellus sem. Donec faucibus eleifend tempor.
                    Aenean sed ipsum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Etiam pretium lorem ut pellentesque gravida. Aliquam eget elementum quam,
                    id porta urna. Proin congue diam sed mauris laoreet, vel tincidunt metus tincidunt. Ut a ligula justo.
                    Quisque id molestie justo. Nulla porttitor rhoncus sapien, eget mattis massa vestibulum a. Nunc bibendum,
                    lectus id ornare accumsan, neque elit tristique libero, quis malesuada metus dui sed quam. Mauris sollicitudin faucibus libero eu auctor.
                </p>
                <div className="pt-5">
                    <BaseRedline width="50" height="2" />
                    <p className="text-[40px] font-bold">
                        Iman Kita
                    </p>
                    <p className="text-[20px] text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis vel urna iaculis luctus.
                        Suspendisse feugiat feugiat ante, convallis dapibus lacus mattis at. Aliquam eu tellus sem. Donec faucibus eleifend tempor.
                        Aenean sed ipsum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Etiam pretium lorem ut pellentesque gravida. Aliquam eget elementum quam,
                        id porta urna. Proin congue diam sed mauris laoreet, vel tincidunt metus tincidunt. Ut a ligula justo.
                        Quisque id molestie justo. Nulla porttitor rhoncus sapien, eget mattis massa vestibulum a. Nunc bibendum,
                        lectus id ornare accumsan, neque elit tristique libero, quis malesuada metus dui sed quam. Mauris sollicitudin faucibus libero eu auctor.
                    </p>
                </div>
            </div>
        </>
    )
}