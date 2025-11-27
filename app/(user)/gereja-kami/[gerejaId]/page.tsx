export default async function GerejaDetail({
    params
}: {
    params: Promise<{ gerejaId: string }>;
}) {
    const productId = (await params).gerejaId;

    return (
        <div>
            <h1>
                test Gereja Gereja Detail
            </h1>
            <h2>
                Gereja ID: {productId}
            </h2>
        </div>
    )
}