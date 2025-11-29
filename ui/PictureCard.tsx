import Image from "next/image"

export default function PictureCard() {
    return (
        <>
            <div className="relative w-fit">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-(--main-color) rounded-full"></div>
                <div className="relative bg-white rounded-full overflow-hidden shadow-md">
                    <Image
                        src="/images/picture-rounded.png"
                        alt="Photo Profile"
                        width={557}
                        height={557}
                    />
                </div>
            </div>
        </>
    )
}