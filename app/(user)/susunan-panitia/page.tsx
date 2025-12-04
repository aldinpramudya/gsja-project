import TitlePageHero from "@/ui/TitlePageHero"
import Image from "next/image"

interface PosisiPanitia {
    id: number,
    name_position: string
}

interface Panitia {
    id: number,
    name_panitia: string,
    image_panitia: string,
    posisi_panitia: PosisiPanitia,
}

interface ApiResponse {
    message: string;
    data: Panitia[]
}

async function getSusunanPanitia(): Promise<Panitia[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${apiUrl}/panitia`, {
            cache: 'no-store'
        })

        if (!response.ok) {
            return [];
        }

        const result: ApiResponse = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching susunan panitia:', error);
        return [];
    }
}

export default async function SusunanPanitia() {
    const panitiaList = await getSusunanPanitia();

    // Group by position
    const groupedPanitia = panitiaList.reduce((acc, panitia) => {
        const positionName = panitia.posisi_panitia?.name_position || 'Lainnya';
        if (!acc[positionName]) {
            acc[positionName] = [];
        }
        acc[positionName].push(panitia);
        return acc;
    }, {} as Record<string, Panitia[]>);

    if (panitiaList.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-600 mb-4">
                    Data Tidak Tersedia
                </h1>
                <p className="text-gray-600">
                    Belum ada data susunan panitia.
                </p>
            </div>
        );
    }

    return (
        <>
            <TitlePageHero title="Kepengurusan Daerah dan Departemen" images="/banner/panitia-banner.jpg" />
            <div className="px-90 py-20">
                {/* Render grouped by position */}
                {Object.entries(groupedPanitia).map(([position, members]) => (
                    <div key={position} className="mb-16">
                        {/* Position Title */}
                        <h2 className="text-3xl font-bold text-(--main-color) text-center mb-8">
                            {position}
                        </h2>

                        {/* Members Grid */}
                        <div className="flex justify-center space-x-8">
                            {members.map((panitia) => (
                                <div
                                    key={panitia.id}
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex flex-col items-center">
                                        {/* Image */}
                                        <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-(--main-color)">
                                            <Image
                                                src={panitia.image_panitia || '/images/picture-rounded.png'}
                                                alt={panitia.name_panitia}
                                                fill
                                                className="object-cover"
                                                unoptimized={process.env.NODE_ENV === 'development'}
                                            />
                                        </div>

                                        {/* Name */}
                                        <p className="text-xl font-bold text-center">
                                            {panitia.name_panitia}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}