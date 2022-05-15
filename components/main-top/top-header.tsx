import React from 'react'
import {
  FaShoppingCart,
  FaMapMarker,
  FaTruck,
  FaPhone,
  FaSign,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa'
type Props = {}

const TopHeader = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-between lg:px-10">
      <div className="flex w-full flex-col items-center justify-center gap-3 py-2 !text-sm !text-white lg:flex-row">
        <div className="header-most-top flex w-5/6 items-center justify-center lg:justify-start lg:w-1/3">
          <p className="flex items-center justify-start gap-x-2 text-left md:justify-center md:text-center">
            <span className="font-medium tracking-widest">
              Offer Zone Top Deals &amp; Discounts
            </span>
            <span>
              <FaShoppingCart />
            </span>
          </p>
        </div>
        <div className="header-right flex w-5/6 flex-wrap lg:w-2/3">
          <ul className="grid w-full grid-cols-2 items-center gap-1 text-center sm:grid-cols-3 md:grid-cols-5 md:gap-5 xl:gap-10">
            <li className="flex w-full items-center justify-center gap-x-2 border-r-2 text-center">
              <a
                className="play-icon popup-with-zoom-anim flex  w-full items-center justify-center gap-x-2 "
                href="#small-dialog1"
              >
                <span>
                  <FaMapMarker />
                </span>{' '}
                Select Location
              </a>
            </li>
            <li className="flex w-full items-center justify-center gap-x-2 border-r-2 text-center">
              <a
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
                className=" flex w-full  items-center justify-center gap-x-2  "
              >
                <span>
                  <FaTruck />
                </span>
                Track Order
              </a>
            </li>
            <li className="flex w-full items-center justify-center gap-x-2 border-r-2 text-center">
              <span>
                <FaPhone />
              </span>
              001 234 5678
            </li>
            <li className="flex w-full items-center justify-center gap-x-2 border-r-2 text-center">
              <a
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
                className="flex w-full  items-center justify-center gap-x-2  "
              >
                <span>
                  <FaSignInAlt />
                </span>
                Login
              </a>
            </li>
            <li className="flex w-full items-center justify-center gap-x-2 border-r-2 text-center">
              <a
                href="#"
                data-toggle="modal"
                data-target="#exampleModal2"
                className=" flex w-full  items-center justify-center gap-x-2  text-white"
              >
                <span>
                  <FaSignOutAlt />
                </span>
                Register{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
