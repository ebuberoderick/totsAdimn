import Image from 'next/image'
import React from 'react'
import logo from "@assets/image/logo.png"

function Perloader() {
  return (
    <div className='flex items-center bg-cream flex-col gap-1 justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
      <div className='w-screen'>
        <div className='max-w-3xl p-4 mx-auto'>
          <Image src={logo} className='mx-auto pointer-events-none' />
          {/* <Image src={loader} className='mx-auto animate-spin duration-[1] pointer-events-none' /> */}
        </div>
      </div>
    </div>
  )
}

export default Perloader