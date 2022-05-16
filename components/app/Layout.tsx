import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { WithChildren } from '../../types/common'
import TopHeader from '../main-top/top-header'
import BottomHeader from '../main-top/bottom-header'
import Navbar from '../main-top/navbar'
import Footer from '../Footer/Footer'

interface LayoutProps extends WithChildren {
  title: string
  description: string
}

export default function Layout({ title, description, children }: LayoutProps) {
  const logo = '/favicon.ico'

  return (
    <>
      <div className="h-full w-full">
        <Head>
          <title>{title}</title>
          <link rel="icon" href={logo} />
          <link rel="shortcut icon" type="image/x-icon" href={logo} />
          <link rel="apple-touch-icon" sizes="180x180" href={logo} />
          <meta name="theme-color" content="#7b46f6" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={logo} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={logo} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Vercel" />
          <meta name="twitter:creator" content="@StevenTey" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={logo} />
        </Head>
        <div className="flex min-h-screen w-full overflow-hidden  flex-col">
          <div className="flex min-h-[2.75rem] items-center justify-center bg-blue-600 px-1 md:px-10 ">
            <TopHeader />
          </div>
          <div className="my-1">
            <BottomHeader />
          </div>
          <div className="">
            <Navbar />
          </div>
          <div className="py-1">{children}</div>
          <div className="footr">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
