import Image from 'next/image';

const ImageWithMarker = ({ src, markerX, markerY }) => {
    return (
        <div className="relative w-full h-auto">
            <Image
                src={src}
                alt="Imagen con marcador"
                layout="responsive"
                width={1000}
                height={500}
                className="object-cover"
            />
            <div
                className="absolute"
                style={{
                    top: `${markerY}%`,
                    left: `${markerX}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <svg className=' w-[50%]  lg:w-[100%] translate-x-[50%]  lg:translate-x-[0%]' width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_341_3)">
                        <circle className=' hover:fill-red-400' cx="78" cy="56" r="50" fill="#EE28FF" />
                    </g>
                    <defs>
                        <filter id="filter0_d_341_3" x="0.1" y="0.1" width="157.8" height="157.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="23" />
                            <feGaussianBlur stdDeviation="14.45" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_341_3" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_341_3" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>
    );
};

export default ImageWithMarker;