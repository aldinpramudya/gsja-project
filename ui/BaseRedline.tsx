interface RedlineProps{
    width : string
    height : string
}

export default function BaseRedline({
    width,
    height,
}: RedlineProps){
    return(
        <div className={`w-${width} h-${height} bg-(--main-color)`} />
    )
}