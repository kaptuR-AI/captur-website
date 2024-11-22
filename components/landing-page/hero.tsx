import React from 'react'
import HeroSvg from './svg'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className='grid lg:grid-cols-2 sm:grid-col-1 max-w-7xl m-auto  mt-4'>
    <div className='flex flex-col m-auto p-4'>
        <div>
    <h1 className="text-5xl font-normal tracking-tight">
    Detect<br />
    Genera<span className="">_</span>
  </h1>
  <p className="mt-4 text-lg leading-relaxed max-w-2xl">
  Captur's multi-model verification platform helps institutions authenticate digital identities, detect synthetic media, and prevent fraud at scale.
  </p>
  </div>

  <Button>Join Waiting List</Button>
       
    </div>

    <div>
    <HeroSvg />
    </div>
    </div>
  )
}
