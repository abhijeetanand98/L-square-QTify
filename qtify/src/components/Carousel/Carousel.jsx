import React,{useEffect} from "react";



import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import styles from "./Carousel.module.css"

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls=({data}) => {
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0);
    }, [data]);
    return <></>
}
function Carousel({data, renderComponent}){

    return (
        <div className={styles.wrapper}>
            <Swiper
            // install Swiper modules
            style={{padding:"0px 20px"}}
            initialState={0}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={"auto"}
            allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
            {data.map((elem, idx)=>(
                <SwiperSlide key={idx}>{renderComponent(elem)}</SwiperSlide>
            ))}
            </Swiper>
        </div>
        );
}

export default Carousel;
