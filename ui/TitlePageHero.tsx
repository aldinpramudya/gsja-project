interface TitlePageProps{
    title : string;
    images : string;
}

export default function TitlePageHero({
    title,
    images,
} : TitlePageProps) {
    return (
        <div>
            {/* Title Hero */}
            <div className="w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${images})` }}>
                <div className="flex flex-col h-[300px] justify-center px-80 pt-20">
                    <div>
                        <div className="w-50 h-2 bg-white" />
                    </div>
                    <h1 className="text-white text-[64px] font-bold drop-shadow-lg capitalize">
                        {title}
                    </h1>
                </div>
            </div>
            {/* Title Hero End */}
        </div>
    )
}