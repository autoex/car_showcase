import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
            src={'/logo.svg'}
            alt='Car Hub'
            width={118}
            height={18}
            className=' object-contain'
          />
  )
}

export default Logo