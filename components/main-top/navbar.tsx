import clsx from 'clsx'
import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'

type Props = {}

const Navbar = (props: Props) => {
  const [show, setShow] = useState<boolean>(false)

  const handleShowMenu = () => {
    setShow((prev) => !prev)
  }

  return (
    <div className="navbar-inner flex w-full items-center justify-center">
      <div className="lg:3/4 w-11/12 md:w-5/6  xl:w-2/3">
        <nav className="flex w-full flex-col items-center justify-between">
          <div className="flex w-full items-center justify-between gap-5 lg:gap-20">
            <div className="agileits-navi_search">
              <form action="#" method="post">
                <select
                  id="agileinfo-nav_search"
                  name="agileinfo_search"
                  className="rounded-lg border-2 bg-white py-3 px-2"
                  required
                >
                  <option value="">All Categories</option>
                  <option value="Televisions">Popular</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Computers">Computers</option>
                  <option value="Appliances">Appliances</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Fruits &amp; Vegetables">
                    Tv &amp; Video
                  </option>
                  <option value="iPad &amp; Tablets">iPad &amp; Tablets</option>
                  <option value="Cameras &amp; Camcorders">
                    Cameras &amp; Camcorders
                  </option>
                  <option value="Home Audio &amp; Theater">
                    Home Audio &amp; Theater
                  </option>
                </select>
              </form>
            </div>

            {/* desktop menu  */}
            <div
              className={clsx('hidden w-full items-center lg:flex')}
              id="navbarSupportedContent"
            >
              <ul
                className={clsx(
                  'navbar-nav flex w-full items-center gap-x-2 text-center'
                )}
              >
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2 flex w-full items-center justify-center">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item active mr-lg-2 mb-lg-0 group relative mb-2 flex w-full items-center justify-center">
                  <a
                    className=" nav-link dropdown-toggle flex items-center justify-between gap-x-2 hover:text-blue-600 focus:text-blue-600"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>Cars</span>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </a>
                  <div className="absolute top-8 z-50 hidden w-[700px] scale-0 rounded-xl border-2 bg-gray-50 shadow-xl transition-all delay-150 group-hover:block group-hover:scale-100 group-hover:transition-all group-focus:block">
                    <div className="agile_inner_drop_nav_info px-5 py-10">
                      <h5 className="mb-5 text-left text-xl text-blue-500">
                        makes
                      </h5>
                      <div className="flex w-full text-gray-700">
                        <div className="multi-gd-img w-1/2">
                          <ul className="flex flex-col items-start gap-4">
                            <li>
                              <a href="product.html">All Popular makes:</a>
                            </li>
                            <li>
                              <a href="product.html">All Mobile Accessories</a>
                            </li>
                            <li>
                              <a href="product.html">Cases &amp; Covers</a>
                            </li>
                            <li>
                              <a href="product.html">Screen Protectors</a>
                            </li>
                            <li>
                              <a href="product.html">Power Banks</a>
                            </li>
                            <li>
                              <a href="product.html">
                                All Certified Refurbished
                              </a>
                            </li>
                            <li>
                              <a href="product.html">Tablets</a>
                            </li>
                            <li>
                              <a href="product.html">Wearable Devices</a>
                            </li>
                            <li>
                              <a href="product.html">Smart Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="multi-gd-img w-1/2">
                          <ul className="flex flex-col items-start gap-4">
                            <li>
                              <a href="product.html">Laptops</a>
                            </li>
                            <li>
                              <a href="product.html">Drives &amp; Storage</a>
                            </li>
                            <li>
                              <a href="product.html">Printers &amp; Ink</a>
                            </li>
                            <li>
                              <a href="product.html">Networking Devices</a>
                            </li>
                            <li>
                              <a href="product.html">Computer Accessories</a>
                            </li>
                            <li>
                              <a href="product.html">Game Zone</a>
                            </li>
                            <li>
                              <a href="product.html">Software</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item active mr-lg-2 mb-lg-0 group relative mb-2 flex w-full items-center justify-center">
                  <a
                    className=" nav-link dropdown-toggle flex items-center gap-x-2 hover:text-blue-600 focus:text-blue-600"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>Accessories</span>
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                  </a>
                  <div className="absolute top-8 z-50 hidden w-[700px] rounded-xl border-2 bg-gray-50 shadow-xl group-hover:block group-focus:block ">
                    <div className="agile_inner_drop_nav_info px-5 py-10">
                      <h5 className="mb-5 text-left text-xl text-blue-500">
                        TV, Appliances, Electronics
                      </h5>
                      <div className="flex w-full text-gray-700">
                        <div className="w-1/2">
                          <ul className="flex flex-col items-start gap-4">
                            <li>
                              <a href="product2.html">Televisions</a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Home Entertainment Systems
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">Headphones</a>
                            </li>
                            <li>
                              <a href="product2.html">Speakers</a>
                            </li>
                            <li>
                              <a href="product2.html">
                                MP3, Media Players &amp; Accessories
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Audio &amp; Video Accessories
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">Cameras</a>
                            </li>
                            <li>
                              <a href="product2.html">DSLR Cameras</a>
                            </li>
                            <li>
                              <a href="product2.html">Camera Accessories</a>
                            </li>
                          </ul>
                        </div>
                        <div className="multi-gd-img w-1/2">
                          <ul className="flex flex-col items-start gap-4">
                            <li>
                              <a href="product2.html">Musical Instruments</a>
                            </li>
                            <li>
                              <a href="product2.html">Gaming Consoles</a>
                            </li>
                            <li>
                              <a href="product2.html">All Electronics</a>
                            </li>
                            <li>
                              <a href="product2.html">Air Conditioners</a>
                            </li>
                            <li>
                              <a href="product2.html">Refrigerators</a>
                            </li>
                            <li>
                              <a href="product2.html">Washing Machines</a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Kitchen &amp; Home Appliances
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Heating &amp; Cooling Appliances
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">All Appliances</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2 flex w-full items-center justify-center">
                  <a className="nav-link" href="product.html">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2 flex w-full items-center justify-center">
                  <a className="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2 flex w-full items-center justify-center">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* toggler */}
            <button
              className="navbar-toggler lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShowMenu}
            >
              <span className="navbar-toggler-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              </span>
            </button>
          </div>

          {/* mobile menu */}
          <div
            className={clsx(
              'my-5 flex items-center transition-all duration-700  md:hidden',
              show ? 'flex-col' : 'hidden'
            )}
            id="navbarSupportedContent"
          >
            <ul
              className={clsx(
                'navbar-nav mr-xl-5 ml-auto flex items-center gap-x-2 text-center ',
                show ? 'w-full flex-col' : 'hidden'
              )}
            >
              <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="index.html">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Electronics
                </a>
                <div className="dropdown-menu hidden">
                  <div className="p-4">
                    <h5 className="">Mobiles, Computers</h5>
                    <div className="flex flex-row">
                      <div className="col-sm-6 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="product.html">All Mobile Phones</a>
                          </li>
                          <li>
                            <a href="product.html">All Mobile Accessories</a>
                          </li>
                          <li>
                            <a href="product.html">Cases &amp; Covers</a>
                          </li>
                          <li>
                            <a href="product.html">Screen Protectors</a>
                          </li>
                          <li>
                            <a href="product.html">Power Banks</a>
                          </li>
                          <li>
                            <a href="product.html">All Certified Refurbished</a>
                          </li>
                          <li>
                            <a href="product.html">Tablets</a>
                          </li>
                          <li>
                            <a href="product.html">Wearable Devices</a>
                          </li>
                          <li>
                            <a href="product.html">Smart Home</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="product.html">Laptops</a>
                          </li>
                          <li>
                            <a href="product.html">Drives &amp; Storage</a>
                          </li>
                          <li>
                            <a href="product.html">Printers &amp; Ink</a>
                          </li>
                          <li>
                            <a href="product.html">Networking Devices</a>
                          </li>
                          <li>
                            <a href="product.html">Computer Accessories</a>
                          </li>
                          <li>
                            <a href="product.html">Game Zone</a>
                          </li>
                          <li>
                            <a href="product.html">Software</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Appliances
                </a>
                <div className="dropdown-menu hidden">
                  <div className="agile_inner_drop_nav_info p-4">
                    <h5 className="mb-3">TV, Appliances, Electronics</h5>
                    <div className="row">
                      <div className="col-sm-6 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="product2.html">Televisions</a>
                          </li>
                          <li>
                            <a href="product2.html">
                              Home Entertainment Systems
                            </a>
                          </li>
                          <li>
                            <a href="product2.html">Headphones</a>
                          </li>
                          <li>
                            <a href="product2.html">Speakers</a>
                          </li>
                          <li>
                            <a href="product2.html">
                              MP3, Media Players &amp; Accessories
                            </a>
                          </li>
                          <li>
                            <a href="product2.html">
                              Audio &amp; Video Accessories
                            </a>
                          </li>
                          <li>
                            <a href="product2.html">Cameras</a>
                          </li>
                          <li>
                            <a href="product2.html">DSLR Cameras</a>
                          </li>
                          <li>
                            <a href="product2.html">Camera Accessories</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="product2.html">Musical Instruments</a>
                          </li>
                          <li>
                            <a href="product2.html">Gaming Consoles</a>
                          </li>
                          <li>
                            <a href="product2.html">All Electronics</a>
                          </li>
                          <li>
                            <a href="product2.html">Air Conditioners</a>
                          </li>
                          <li>
                            <a href="product2.html">Refrigerators</a>
                          </li>
                          <li>
                            <a href="product2.html">Washing Machines</a>
                          </li>
                          <li>
                            <a href="product2.html">
                              Kitchen &amp; Home Appliances
                            </a>
                          </li>
                          <li>
                            <a href="product2.html">
                              Heating &amp; Cooling Appliances
                            </a>
                          </li>
                          <li>
                            <a href="product2.html">All Appliances</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="product.html">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu hidden">
                  <a className="dropdown-item" href="product.html">
                    Product 1
                  </a>
                  <a className="dropdown-item" href="product2.html">
                    Product 2
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="single.html">
                    Single Product 1
                  </a>
                  <a className="dropdown-item" href="single2.html">
                    Single Product 2
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="checkout.html">
                    Checkout Page
                  </a>
                  <a className="dropdown-item" href="payment.html">
                    Payment Page
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react'
// export default function Navbar() {
//   const [show, setShow] = useState<boolean>(false)
//   const MenuHandler = (val: boolean) => {}
//   return (
//     <>
//       <div className="h-full w-full bg-gray-200">
//         <nav className="hidden bg-white shadow xl:block">
//           <div className="container mx-auto px-6 py-2 xl:py-0">
//             <div className="flex items-center justify-between">
//               <div className="inset-y-0 left-0 flex items-center xl:hidden">
//                 <div className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition duration-150 ease-in-out hover:text-gray-100 focus:outline-none">
//                   {/* mobile view */}
//                   <div className="visible xl:hidden">
//                     <ul className="hidden rounded border-r bg-white p-2 shadow md:mt-8">
//                       <li className="mt-2 flex cursor-pointer py-2 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none xl:hidden">
//                         <div className="flex items-center">
//                           <span className="ml-2 font-bold">Dashboardd</span>
//                         </div>
//                       </li>
//                       <li className="flex cursor-pointer flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none xl:hidden">
//                         <div className="flex items-center">
//                           <span className="ml-2 font-bold">Products</span>
//                         </div>
//                       </li>
//                       <li className="flex cursor-pointer items-center py-2 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none xl:hidden">
//                         <span className="ml-2 font-bold">Performance</span>
//                       </li>
//                       <li className="flex cursor-pointer items-center border-b border-gray-300 pt-2 pb-4 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none xl:hidden">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="icon icon-tabler icon-tabler-code"
//                           width={20}
//                           height={20}
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           fill="none"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path stroke="none" d="M0 0h24v24H0z" />
//                           <polyline points="7 8 3 12 7 16" />
//                           <polyline points="17 8 21 12 17 16" />
//                           <line x1={14} y1={4} x2={10} y2={20} />
//                         </svg>
//                         <span className="ml-2 font-bold">Deliverables</span>
//                       </li>
//                       <li className="mt-2 flex cursor-pointer items-center py-2 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
//                         <div className="flex items-center">
//                           <div className="flex w-12 cursor-pointer rounded border-2 border-transparent text-sm transition duration-150 ease-in-out focus:border-white focus:outline-none">
//                             <img
//                               className="h-10 w-10 rounded object-cover"
//                               src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
//                               alt="logo"
//                             />
//                           </div>
//                           <p className="ml-2 cursor-pointer text-sm">
//                             Jane Doe
//                           </p>
//                           <div className="relative text-white sm:ml-2">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
//                               width={20}
//                               height={20}
//                               viewBox="0 0 24 24"
//                               strokeWidth="1.5"
//                               stroke="currentColor"
//                               fill="none"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <path stroke="none" d="M0 0h24v24H0z" />
//                               <polyline points="6 9 12 15 18 9" />
//                             </svg>
//                           </div>
//                         </div>
//                       </li>
//                       <li className="cursor-pointer py-2 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
//                         <div className="flex items-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="icon icon-tabler icon-tabler-user"
//                             width={20}
//                             height={20}
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             fill="none"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path stroke="none" d="M0 0h24v24H0z" />
//                             <circle cx={12} cy={7} r={4} />
//                             <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                           </svg>
//                           <span className="ml-2">Profile</span>
//                         </div>
//                       </li>
//                     </ul>
//                     <svg
//                       onClick={() => MenuHandler(true)}
//                       aria-haspopup="true"
//                       aria-label="Main Menu"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="show-m-menu icon icon-tabler icon-tabler-menu"
//                       width={28}
//                       height={28}
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" />
//                       <line x1={4} y1={8} x2={20} y2={8} />
//                       <line x1={4} y1={16} x2={20} y2={16} />
//                     </svg>
//                   </div>
//                   {/* mobile view */}
//                   <div
//                     className="close-m-menu hidden text-gray-700"
//                     onClick={() => MenuHandler(false)}
//                   >
//                     <svg
//                       aria-label="Close"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" />
//                       <line x1={18} y1={6} x2={6} y2={18} />
//                       <line x1={6} y1={6} x2={18} y2={18} />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex w-full items-center justify-end sm:w-auto sm:items-stretch sm:justify-start">
//                 <div className="flex items-center">
//                   <div className="agileits-navi_search">
//                     <form action="#" method="post">
//                       <select
//                         id="agileinfo-nav_search"
//                         name="agileinfo_search"
//                         className="rounded-lg border-2 bg-white py-3 px-2"
//                         required
//                       >
//                         <option value="">All Categories</option>
//                         <option value="Televisions">Televisions</option>
//                         <option value="Headphones">Headphones</option>
//                         <option value="Computers">Computers</option>
//                         <option value="Appliances">Appliances</option>
//                         <option value="Mobiles">Mobiles</option>
//                         <option value="Fruits &amp; Vegetables">
//                           Tv &amp; Video
//                         </option>
//                         <option value="iPad &amp; Tablets">
//                           iPad &amp; Tablets
//                         </option>
//                         <option value="Cameras &amp; Camcorders">
//                           Cameras &amp; Camcorders
//                         </option>
//                         <option value="Home Audio &amp; Theater">
//                           Home Audio &amp; Theater
//                         </option>
//                       </select>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex">
//                 {/* desktop view */}
//                 <div className="hidden md:mr-6 xl:mr-16 xl:flex">
//                   <a
//                     href="javascript: void(0)"
//                     className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
//                   >
//                     Dashboard
//                   </a>
//                   <a
//                     href="javascript: void(0)"
//                     className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
//                   >
//                     Products
//                   </a>
//                   <a
//                     href="javascript: void(0)"
//                     className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
//                   >
//                     Performance
//                   </a>
//                   <a
//                     href="javascript: void(0)"
//                     className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
//                   >
//                     Deliverables
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <nav>
//           <div className="fixed top-0 z-40 flex w-full items-center justify-between bg-white py-4 px-6 xl:hidden">
//             <div className="flex items-center">
//               <div
//                 id="menu"
//                 className="text-gray-800"
//                 onClick={() => setShow((prev) => !prev)}
//               >
//                 {show ? (
//                   ''
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="icon icon-tabler icon-tabler-menu-2"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                     <line x1={4} y1={6} x2={20} y2={6} />
//                     <line x1={4} y1={12} x2={20} y2={12} />
//                     <line x1={4} y1={18} x2={20} y2={18} />
//                   </svg>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/*Mobile responsive sidebar*/}
//           <div
//             className={
//               show
//                 ? 'z-40 h-full w-full translate-x-0  transform  xl:hidden '
//                 : '   z-40 h-full w-full -translate-x-full  transform xl:hidden'
//             }
//           >
//             <div
//               className="h-full w-full bg-gray-800 opacity-50"
//               onClick={() => setShow(!show)}
//             />
//             <div className="fixed top-0 z-40 h-full w-64 flex-col justify-between overflow-y-auto bg-white pb-4 shadow transition duration-150 ease-in-out xl:hidden">
//               <div className="h-full px-6">
//                 <div className="flex h-full w-full flex-col justify-between">
//                   <div>
//                     <div className="mt-6 flex w-full items-center justify-between">
//                       <div className="flex w-full items-center justify-between">

//                         <div
//                           id="cross"
//                           className="text-gray-800"
//                           onClick={() => setShow(!show)}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="icon icon-tabler icon-tabler-x"
//                             width={24}
//                             height={24}
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             fill="none"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path stroke="none" d="M0 0h24v24H0z" />
//                             <line x1={18} y1={6} x2={6} y2={18} />
//                             <line x1={6} y1={6} x2={18} y2={18} />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                     <ul className="f-m-m">
//                       <a className="cursor-pointer">
//                         <li className="pt-10 text-gray-800">
//                           <div className="flex items-center">
//                             <div className="h-6 w-6 text-indigo-700 md:h-8 md:w-8">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon icon-tabler icon-tabler-grid"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <rect x={4} y={4} width={6} height={6} rx={1} />
//                                 <rect
//                                   x={14}
//                                   y={4}
//                                   width={6}
//                                   height={6}
//                                   rx={1}
//                                 />
//                                 <rect
//                                   x={4}
//                                   y={14}
//                                   width={6}
//                                   height={6}
//                                   rx={1}
//                                 />
//                                 <rect
//                                   x={14}
//                                   y={14}
//                                   width={6}
//                                   height={6}
//                                   rx={1}
//                                 />
//                               </svg>
//                             </div>
//                             <p className="ml-3 text-base text-indigo-700 xl:text-base">
//                               Dashboard
//                             </p>
//                           </div>
//                         </li>
//                       </a>
//                       <a className="cursor-pointer">
//                         <li className="pt-8 text-gray-800">
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                               <div className="h-6 w-6 text-gray-800 md:h-8 md:w-8">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   className="icon icon-tabler icon-tabler-puzzle"
//                                   viewBox="0 0 24 24"
//                                   strokeWidth="1.5"
//                                   stroke="currentColor"
//                                   fill="none"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                 >
//                                   <path stroke="none" d="M0 0h24v24H0z" />
//                                   <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
//                                 </svg>
//                               </div>
//                               <p className="ml-3 text-base text-gray-800 md:text-2xl xl:text-base">
//                                 Products
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                       </a>
//                       <a className="cursor-pointer">
//                         <li className="pt-8 text-gray-800">
//                           <div className="flex items-center">
//                             <div className="h-6 w-6 text-gray-800 md:h-8 md:w-8">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon icon-tabler icon-tabler-compass"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <polyline points="8 16 10 10 16 8 14 14 8 16" />
//                                 <circle cx={12} cy={12} r={9} />
//                               </svg>
//                             </div>
//                             <p className="ml-3 text-base text-gray-800 md:text-2xl xl:text-base">
//                               Performance
//                             </p>
//                           </div>
//                         </li>
//                       </a>
//                       <li className="cursor-pointer pt-8 text-gray-800">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center">
//                             <div className="h-6 w-6 text-gray-800 md:h-8 md:w-8">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon icon-tabler icon-tabler-code"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <polyline points="7 8 3 12 7 16" />
//                                 <polyline points="17 8 21 12 17 16" />
//                                 <line x1={14} y1={4} x2={10} y2={20} />
//                               </svg>
//                             </div>
//                             <p className="ml-3 text-base text-gray-800 md:text-2xl xl:text-base">
//                               Deliverables
//                             </p>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="w-full pt-4">
//                     <div className="mb-4 flex w-full justify-center">
//                       <div className="relative w-full">
//                         <div className="absolute inset-0 m-auto ml-4 h-4 w-4 text-gray-500">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="icon icon-tabler icon-tabler-search"
//                             width={16}
//                             height={16}
//                             viewBox="0 0 24 24"
//                             strokeWidth={1}
//                             stroke="#A0AEC0"
//                             fill="none"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path stroke="none" d="M0 0h24v24H0z" />
//                             <circle cx={10} cy={10} r={7} />
//                             <line x1={21} y1={21} x2={15} y2={15} />
//                           </svg>
//                         </div>
//                         <input
//                           className="w-full rounded bg-gray-100 py-2 pl-10 text-sm  text-gray-500 focus:outline-none"
//                           type="text"
//                           placeholder="Search"
//                         />
//                       </div>
//                     </div>
//                     <div className="border-t border-gray-300">
//                       <div className="flex w-full items-center justify-between pt-1">
//                         <div className="flex items-center">
//                           <img
//                             alt="profile-pic"
//                             src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
//                             className="h-8 w-8 rounded-md"
//                           />
//                           <p className=" ml-2 text-base leading-4 text-gray-800">
//                             Jane Doe
//                           </p>
//                         </div>
//                         <ul className="flex">
//                           <li className="cursor-pointer pt-5 pb-3 text-gray-800">
//                             <div className="h-6 w-6 md:h-8 md:w-8">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon icon-tabler icon-tabler-messages"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1}
//                                 stroke="currentColor"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
//                                 <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
//                               </svg>
//                             </div>
//                           </li>
//                           <li className="cursor-pointer pt-5 pb-3 pl-3 text-gray-800">
//                             <div className="h-6 w-6 md:h-8 md:w-8">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon icon-tabler icon-tabler-bell"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1}
//                                 stroke="currentColor"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               >
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
//                                 <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
//                               </svg>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//         {/* Code block ends */}
//       </div>
//     </>
//   )
// }
