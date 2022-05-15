
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper'
import Image from 'next/image'

export default function Carousel() {
  const slides = [
    {
      src: ' https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/b1.jpg',
      title: 'Some thing',
    },
    {
      src: 'https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/b2.jpg',
      title: 'Some thing',
    },
    {
      src: 'https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/b3.jpg',
      title: 'Some thing',
    },
    {
      src: 'https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/b4.jpg',
      title: 'Some thing',
    },
  ]

  const SingleSlide = ({ slide }: { slide: any }) => {
    return (
      <div className="h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src={slide.src}
            layout="fill"
            alt="sitting area"
            className="relative object-contain"
          />
          <div className="absolute h-full w-full grid place-items-center !drop-shadow-xl  !shadow-black">
            <div className="w-7/12 backdrop-blur-xl border-8 border-opacity-5 rounded-lg border-black h-3/5 flex flex-col gap-y-6 text-white items-start p-10 bg-black bg-opacity-25">
              <h2 className="text-3xl [text-shadow:0_8px_10px_rgba(0,0,0,1)] ">
                Get Now
                <span className="text-5xl font-bold  " > 40% </span> Discount
              </h2>
              <h3 className="text-6xl font-bold pb-lg-5 pt-2 pb-4 tracking-widest [text-shadow:0_8px_10px_rgba(0,0,0,1)] ">
                Today
                <span className="text-red-500"> Discount</span>
              </h3>
              <a className="button2 px-8 py-3 hover:bg-red-500 transition-all duration-300 hover:text-white bg-blue-600 rounded-md" href="product.html">
                Shop Now{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const pagination = {
    clickable: true,
    
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + ' w-10 h-1">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="h-[650px]  w-screen text-white fill-white">
      <Swiper
        
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}

        style={{
      
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        rewind={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}

      >
         
        {slides.length > 0 &&
          slides.map((slide, index) => {
            return (
              <SwiperSlide key={index} >
                <SingleSlide slide={slide} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}
