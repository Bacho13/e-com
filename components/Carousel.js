import React, { useState } from "react";
import styles from "../styles/componentStyles/Carousel.module.scss";
import slide1 from "../public/images/slide1.png";
import slide2 from "../public/images/slide2.png";
import slide3 from "../public/images/slide3.png";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Carousel() {
  const [slides, setSlides] = useState([slide1, slide2, slide3]);
  const [exhibited, setExhibited] = useState(0);

  const handleRight = () => {
    if (exhibited == slides.length - 1) {
      setExhibited(0);
    } else {
      setExhibited((exhibited) => (exhibited += 1));
    }
    console.log(exhibited);
  };
  const handleLeft = () => {
    if (exhibited == 0) {
      setExhibited(slides.length - 1);
      console.log(exhibited);
    } else {
      setExhibited((prev) => (prev -= 1));
      console.log(exhibited);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.imgCont}>
          <Image
            width={500}
            height={500}
            src={slides[exhibited]}
            alt="slide 1"
            className={styles.image}
          />
          <div className={styles.leftArrow} onClick={handleLeft}>
            <ChevronLeftIcon className={styles.leftIcon} />
          </div>
          <div className={styles.rightArrow} onClick={handleRight}>
            <ChevronRightIcon className={styles.rightIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
