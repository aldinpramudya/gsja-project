import Image from "next/image"

interface PictureCardProps{
    images : string;
}

export default function PictureCard({
    images
}: PictureCardProps) {
    return (
        <>
            <div className="relative w-fit">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-(--main-color) rounded-full"></div>
                <div className="relative bg-white rounded-full overflow-hidden shadow-md">
                    <Image
                        src={images}
                        alt="Photo Profile"
                        width={557}
                        height={557}
                        unoptimized={process.env.NODE_ENV === 'development'}
                    />
                </div>
            </div>
        </>
    )
}