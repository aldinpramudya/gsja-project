import GerejaMapsComponents from "@/ui/GerejaMapsComponents";
import PictureCard from "@/ui/PictureCard";
import TitlePageHero from "@/ui/TitlePageHero"

interface Pendeta {
    id: number;
    name_pendeta: string;
    image_pendeta: string;
    salary: string;
    created_at: string;
    updated_at: string;
}

interface Gereja {
    id: number;
    name_gereja: string;
    address_gereja: string;
    slugs_gereja: string;
    image_gereja: string;
    numberphone_gereja: string;
    email_gereja: string;
    pendeta: Pendeta;
}

interface ApiResponse {
    message: string;
    data: Gereja;
}

async function getGereja(slug: string): Promise<Gereja | null> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(
            `${apiUrl}/gereja/${slug}`,
            {
                cache: 'no-store'
            }
        );
        if (!response.ok) {
            return null;
        }

        const result: ApiResponse = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error Fetching Gereja: ", error);
        return null;
    }
}

export default async function GerejaDetail({
    params
}: {
    params: Promise<{ gerejaId: string }>;
}) {
    const gerejaSlug = (await params).gerejaId;
    const gereja = await getGereja(gerejaSlug);

    if (!gereja) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Data Gereja Belum Tidak Ditemukan
                </h1>
                <p className="text-gray-600">
                    Gereja masih belum ada di data
                </p>
            </div>
        )
    }

    return (
        <div>
            <TitlePageHero title={gereja.name_gereja} images="/banner/gereja-kami-banner.png" />
            <GerejaMapsComponents
                church_name={gereja.name_gereja}
                church_address={gereja.address_gereja}
                church_email={gereja.email_gereja}
                church_number={gereja.numberphone_gereja}
                images={gereja.image_gereja}
            />
            <div className="flex justify-center py-10">
                <div>
                    {gereja.pendeta && (
                        <div className="flex flex-col items-center">
                            <PictureCard
                                images={
                                    gereja.pendeta.image_pendeta
                                        ? `http://localhost:8000/storage/${gereja.pendeta.image_pendeta}`
                                        : "/images/picture-rounded.png"
                                }
                            />
                            <div className="pt-10 text-[24px] text-center">
                                <p>Pastor yang melayani :</p>
                                <p className="text-(--main-color) font-bold">
                                    {gereja.pendeta.name_pendeta}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}