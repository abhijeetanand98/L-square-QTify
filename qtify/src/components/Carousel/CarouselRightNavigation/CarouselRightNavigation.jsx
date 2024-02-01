import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";

import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg"
import { useSwiper } from "swiper/react";

function CarouselRightNavigation(){
    const swiper=useSwiper();
    const [isEnd, setIsEnd]=useState();

    useEffect(()=>{
        swiper.on("SlideChange",function() {
            setIsEnd(swiper.isBeginning);
        })        
    },[]);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}

        </div>
    )
}

export default CarouselRightNavigation;