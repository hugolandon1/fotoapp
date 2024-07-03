'use client'
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import './PhotoSlider.css'
/* import LeftArrow from '../leftarrow/LeftArrow';
import RightArrow from '../rightarrow/RightArrow'; */
import { RightArrow, LeftArrow } from '../customarrows/CustomArrows';


const photos = [
    "https://i.ibb.co/3SR81Lc/2024-06-28-06-22-44-9332.png",
    "https://i.ibb.co/7pvkN9F/2024-06-28-06-23-40-2069.png",
    "https://i.ibb.co/Hqt2n82/2024-06-28-06-20-31-1634.png",
    "https://i.ibb.co/VgV62ps/2024-06-28-06-21-28-1131.png"
]


const PhotoSlider = () => {
    return (
        <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
            stopOnHover
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-prev">
                    <LeftArrow />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-next">
                    <RightArrow />
                  </button>
                )
              }
        >
            {photos.map((photo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    
                >
                    <Image src={photo} width={500} height={100} alt={`Photo ${index + 1}`} />
                </motion.div>
            ))}
        </Carousel>
    )
}

export default PhotoSlider;