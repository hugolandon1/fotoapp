import PhotoSlider from "@/components/photoslider/PhotoSlider"
import Image from "next/image"


const Mujer = () => {
    return (
        <>
        <div className=" ">
            <div >
                <PhotoSlider />
            </div>

        </div>
        <div className="w-full">
            <Image src="https://i.ibb.co/2WC5BYm/Leonardo-Vision-XL-nike-store-website-1.jpg" width={1500} height={1500} alt="imagen esta" />
        </div>
        </>
    )
}

export default Mujer