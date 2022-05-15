import Link from 'next/link'
import { type } from 'os'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import { Make } from '../../types/common'

type Props = {
  popularMakes: {
    makeList: Make[]
    total: number
    currentPage: number
    pageSize: number
  }
}

const NewProduct = (props: Props) => {
  return (
    <div className="my-14 flex w-full  justify-center">
      <div className="flex w-11/12 flex-col items-center gap-y-5 lg:w-3/4">
        <div className="title">
          <h1 className="text-5xl font-bold">
            <span className="text-6xl font-bold text-blue-600">O</span>ur &nbsp;
            <span className="text-6xl font-bold text-blue-600">N</span>ew &nbsp;
            <span className="text-6xl font-bold text-blue-600">P</span>roduct
          </h1>
        </div>
        <div className="flex w-full gap-x-5">
          <div className="flex w-3/4 flex-col items-center gap-y-10 ">
            <div className="popular min-h-[500px] w-full shadow-xl drop-shadow-xl ">
              <div className="flex flex-col gap-5">
                <h3 className="my-5 py-2 text-center text-4xl">Popular Car</h3>
                <div className="my-5 grid grid-cols-3 gap-10 p-5">
                  {props.popularMakes.makeList.length > 0 &&
                    props.popularMakes.makeList
                      .slice(0, 3)
                      .map((item: Make) => {
                        return (
                          <Link
                            key={item.id}
                            href={item.name.trim().toLowerCase()}
                          >
                            <div className="flex cursor-pointer flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                              <div className="relative flex w-[150px] items-center justify-center">
                                <img
                                  className=" top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
                                  src={item.imageUrl}
                                  alt="fsf"
                                />
                              </div>
                              <hr />
                              <h4>{item.name}</h4>
                            </div>
                          </Link>
                        )
                      })}
                </div>
              </div>
            </div>
            <div className="popular min-h-[500px] w-full shadow-xl drop-shadow-xl ">
              <div className="flex flex-col gap-5">
                <h3 className="my-5 py-2 text-center text-4xl">Popular Car</h3>
                <div className="my-5 grid grid-cols-3 gap-10 p-5">
                  {props.popularMakes.makeList.length > 0 &&
                    props.popularMakes.makeList
                      .slice(0, 3)
                      .map((item: Make) => {
                        return (
                          <Link
                            key={item.id}
                            href={item.name.trim().toLowerCase()}
                          >
                            <div className="flex cursor-pointer flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                              <div className="relative flex w-[150px] items-center justify-center">
                                <img
                                  className=" top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
                                  src={item.imageUrl}
                                  alt="fsf"
                                />
                              </div>
                              <hr />
                              <h4>{item.name}</h4>
                            </div>
                          </Link>
                        )
                      })}
                </div>
              </div>
            </div>
            <div className="popular hidden min-h-[500px] w-full shadow-xl drop-shadow-xl md:flex">
              <div className="titl">
                <h3 className="my-5 py-2 text-center text-4xl">Popular Car</h3>
                <div className="my-5 grid grid-cols-3 gap-10">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src="https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/m1.jpg"
                          alt="fsf"
                        />
                        <hr />
                        <h4>Samsung Galaxy J7</h4>
                        <div className="">
                          <h5 className="text-red-600">$200.00</h5>
                          <h6 className="line-through">$280.00</h6>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
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

export default NewProduct
