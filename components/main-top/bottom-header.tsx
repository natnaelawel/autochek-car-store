import Link from 'next/link'
import React from 'react'
import {
  FaShoppingCart,
  FaMapMarker,
  FaTruck,
  FaPhone,
  FaSign,
  FaSignInAlt,
  FaSignOutAlt,
  FaCartArrowDown,
} from 'react-icons/fa'
type Props = {}

const BottomHeader = (props: Props) => {
  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <div className="header-bot_inner_wthreeinfo_header_mid lg:3/4 flex w-11/12 flex-col gap-3 py-1 md:w-5/6 md:gap-2 lg:h-24 lg:flex-row xl:w-2/3">
        <div className="logo_agile h-full  w-full lg:w-1/3 ">
          <h1 className="h-full text-center text-4xl font-semibold italic text-[#F45C5D] md:text-5xl">
            <Link href="/">
              <div className="relative flex h-full items-center gap-3 p-1  ">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/logo2.png"
                  alt=" "
                  className="h-full object-cover"
                />
                Car Store
              </div>
            </Link>
          </h1>
        </div>
        <div className="header flex w-full items-center lg:w-3/4 xl:w-2/3  ">
          <div className="w-5/6 ">
            <form
              className="form-inline flex h-full items-center gap-3"
              action="#"
              method="post"
            >
              <input
                className="form-control h-full w-full border border-gray-400 py-3 px-5 outline-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
                required
              />
              <button
                className="bg-[#F45C5D] px-10 py-3 text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="w-1/6 text-center">
            <form
              action="#"
              method="post"
              className="flex h-full items-center justify-center"
            >
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <button
                className="btn w3view-cart flex items-center justify-center rounded-md bg-black p-3 text-white "
                type="submit"
                name="submit"
                value=""
              >
                <span className="text-xl">
                  <FaCartArrowDown />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader
