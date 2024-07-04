'use client'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion, AnimatePresence  } from 'framer-motion';
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
      transitionTime={500}
      stopOnHover
      showStatus={false}
      selectedItem={selectedIndex}
      onChange={index => setSelectedIndex(index)}
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
      animationHandler="fade"
    >
      {photos.map((photo, index) => (
        <AnimatePresence key={index}>
          {selectedIndex === index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={photo} alt={`Photo ${index + 1}`} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </Carousel>
  );
};

export default PhotoSlider;