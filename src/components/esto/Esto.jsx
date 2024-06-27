import Image from "next/image"


const Esto = ({ img, width, height, alt }) => {
    return (
        <div>
            <Image
                src={img}
                width={width}
                height={height}
                alt={alt}
            />
        </div>
    )
}

export default Esto