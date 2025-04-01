'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-styles.css'
import Image from 'next/image'

export default function ImageSlider({imageUrls}) {
    return (
    <>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
            type: 'progressbar',
          }}
      >
       {imageUrls.map((imageUrl, index) => (
        <SwiperSlide key={index}>
           <Image src={imageUrl}  alt="photo"/>
        </SwiperSlide>
       ))} 
      </Swiper>
    </>
    )  
}