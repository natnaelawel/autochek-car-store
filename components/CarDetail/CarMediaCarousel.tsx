import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper'
import Image from 'next/image'
import { carMedia } from '../../types/common'
import { Slide } from 'pure-react-carousel'
import Link from 'next/link'

type Props = {
  slides: carMedia[]
}
export default function CarMediaCarousel(props: Props) {
  console.log(props, props.slides, ' is props')
  const SingleSlide = ({ slide }: { slide: carMedia }) => {
    return (
      <Link
        href={slide.url}
        target="_blank"
        className="h-full w-full cursor-pointer"
      >
        <div className="h-full w-full cursor-pointer">
          <div className="relative h-full w-full">
            <div className="w-full">
              {slide.type.includes('image') ? (
                <Image
                  src={slide.url}
                  layout="fill"
                  alt="sitting area"
                  className="relative object-cover"
                />
              ) : (
                <video
                  className="h-full w-full"
                  autoPlay
                  muted
                  controls={false}
                  src={slide.url}
                />
              )}
            </div>
            <div className="absolute bottom-0 flex h-full w-full flex-col justify-end !shadow-black  !drop-shadow-xl">
              <div className="flex h-1/4 w-full flex-col items-start gap-y-6 rounded-lg border-8 border-black border-opacity-5 bg-black bg-opacity-25 p-10 text-white backdrop-blur-xl">
                <h2 className="text-5xl [text-shadow:0_8px_10px_rgba(0,0,0,1)] ">
                  {slide.name}
                </h2>
                <h3 className="pb-lg-5 pt-2 pb-4 text-6xl font-bold tracking-widest [text-shadow:0_8px_10px_rgba(0,0,0,1)] "></h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' + className + ' w-10 h-1">' + (index + 1) + '</span>'
      )
    },
  }

  return (
    <div className="relative h-full w-full">
      <Swiper
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        rewind={true}
        loop={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
      >
        {props.slides &&
          props.slides.length > 0 &&
          props.slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleSlide slide={slide} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}
