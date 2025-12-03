import Image from "next/image"
import Link from "next/link"

interface BaseCardProps {
    image: string;
    title: string;
    excerpt: string;
    slug: string;
    baseUrl?: string;
}

export default function BaseCard({
    image,
    title,
    excerpt,
    slug,
    baseUrl = "/artikel"
}: BaseCardProps) {
    return (
        <>
            <div className="relative w-full max-w-sm h-full min-h-[300px]">
                {/* Background warna main-color di belakang */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-(--main-color) rounded-2xl"></div>

                {/* Card putih */}
                <div className="relative bg-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">

                    {/* Image */}
                    <div className="relative w-full h-[182px] mb-4 overflow-hidden rounded-lg">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col flex-1">
                        {/* Title */}
                        <h3 className="font-bold text-[20px] mb-2 line-clamp-2">
                            {title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[#898989] font-semibold text-[15px] mb-3 line-clamp-3">
                            {excerpt}
                        </p>
                    </div>

                    {/* Link */}
                    <Link
                        href={`${baseUrl}/${slug}`}
                        className="text-(--main-color) hover:underline text-[20px] font-bold inline-block"
                    >
                        Lihat Lebih Lanjut
                    </Link>
                </div>
            </div>
        </>

    )
}