import Image from "next/image"

export default function Home(){
    return(
        <div>
            <Image 
                src = "/images/banner.png"
                alt = "Banner"
                width={1920}
                height={100}
                className="h-90"
            />
            
        </div>
    )
}