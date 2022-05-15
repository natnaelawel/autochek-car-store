import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex min-h-[150px] w-full items-center justify-between bg-blue-600 text-white lg:px-10">
      <div className="flex w-full flex-col items-center justify-center gap-3 py-2 !text-sm !text-white lg:flex-row">
        <h2 className="text-2xl">© 2022 Car Store. All rights reserved</h2>
      </div>
    </div>
  )
}

export default Footer
