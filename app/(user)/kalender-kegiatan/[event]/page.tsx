export default async function EventDetail({
    params
}: {
    params: Promise<{ event: string }>;
}) {
    const eventId = (await params).event;
    return (
        <div>
            Event {eventId}
        </div>
    )
}