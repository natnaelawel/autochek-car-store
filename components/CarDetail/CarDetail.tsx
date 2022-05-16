import Link from 'next/link'
import { type } from 'os'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import { carMedia, Make } from '../../types/common'
import CarMediaCarousel from './CarMediaCarousel'

type Props = {
  cardetail: {
    carMediaList: carMedia[]
    total: number
    currentPage: number
    pageSize: number
  }
}

const CarDetail = (props: Props) => {
  console.log(props.cardetail, ' is tail')
  return (
    <div className="my-14 flex w-full  justify-center">
      <div className="flex w-11/12 flex-col items-center gap-y-5 lg:w-3/4">
        <div className="title">
          <h1 className="text-5xl font-bold">
            <span className="text-6xl font-bold text-blue-600">T</span>oyota
            &nbsp;
          </h1>
        </div>
        <div className="relative flex w-full max-w-screen-2xl gap-x-5">
          <div className="relative flex w-3/4 flex-col items-center gap-y-10 border ">
            {props.cardetail ? (
              <div className="relative h-full max-w-full border-2">
                <CarMediaCarousel slides={props.cardetail.carMediaList} />
              </div>
            ) : (
              <h1 className="text-4xl text-white">Loading</h1>
            )}
          </div>
          <div className="sibar flex h-full w-1/4 flex-col gap-y-5 bg-gray-100 p-4">
            <div className="search">
              <h1 className="my-2 px-2">Search Here...</h1>
              <div className="my-4 flex items-center gap-3 px-2">
                <input
                  type="text"
                  name="search-here"
                  id="search-here"
                  autoComplete="Search Here..."
                  placeholder="Search Here..."
                  className="flex h-full w-full flex-1 rounded-md border border-gray-300 p-3 shadow-sm"
                />
                <button className="block h-full rounded-md bg-blue-600 py-3 px-4 text-white shadow-sm ">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
            <hr />
            <div className="search flex flex-col items-start">
              <h1 className="my-2 px-2 text-3xl text-red-600">Price</h1>
              <div className="my-4 flex flex-col items-start gap-3 px-5 text-gray-600">
                <p>Under $1,000</p>
                <p>$1,000 - $5,000</p>
                <p>$5,000 - $10,000</p>
                <p>$10,000 - $20,000</p>
                <p>$20,000 $30,000</p>
                <p>Over $30,000</p>
              </div>
            </div>
            <hr />
            <hr />
            <div className="search flex flex-col items-start">
              <h1 className="my-2 px-2 text-3xl text-red-600">Discount</h1>
              <div className="my-4 flex flex-col items-start gap-3 px-5 text-gray-600">
                <div className="flex items-center gap-x-5">
                  <input type="checkbox" className="h-4 w-4" id="fiv-pr1" />
                  <label htmlFor="fiv-pr1">5% or More</label>
                </div>
                <div className="flex items-center gap-x-5">
                  <input type="checkbox" className="h-4 w-4" id="fiv-pr2" />
                  <label htmlFor="fiv-pr2">10% or More</label>
                </div>
                <div className="flex items-center gap-x-5">
                  <input type="checkbox" className="h-4 w-4" id="fiv-pr3" />
                  <label htmlFor="fiv-pr3">20% or More</label>
                </div>
                <div className="flex items-center gap-x-5">
                  <input type="checkbox" className="h-4 w-4" id="fiv-pr4" />
                  <label htmlFor="fiv-pr4">30% or More</label>
                </div>
                <div className="flex items-center gap-x-5">
                  <input type="checkbox" className="h-4 w-4" id="fiv-pr5" />
                  <label htmlFor="fiv-pr5">50% or More</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetail
