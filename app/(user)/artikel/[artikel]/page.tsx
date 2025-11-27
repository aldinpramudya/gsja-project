export default async function ArtikelPage({
    params
}: {
    params : Promise<{ artikel: string }>;
}) {
    const artikelId = (await params).artikel;
    return (
        <div>
            <h1>
                judul artikel : {artikelId}
            </h1>
        </div>
    )
}