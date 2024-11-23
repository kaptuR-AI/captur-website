import React from 'react'
import HeroSvg from './svg'
import { FlipWords } from '../ui/flip-words'
import { WaitlistButton } from './waiting-list';

export default function Hero() {

    const words = ["Deepfakes","Generated Text", "Voice Spoofing", "Disinformation", "Fraud"];

  return (
    <section className='grid lg:grid-cols-2 sm:grid-col-1 max-w-7xl m-auto  mt-4'>
    <div className='flex flex-col m-auto p-4'>
    <div className='p-4 space-y-4'>
    <h1 className="text-6xl mb-4 text-blue-500 font-bold">
    Detect <br />
    </h1>

    <FlipWords words={words} /> <br />

    <p className="mt-4 text-lg leading-relaxed max-w-2xl">
    Captur&apos;s multi-model verification platform helps institutions authenticate digital identities, detect synthetic media, and prevent fraud at scale.
    </p>
    </div>
    <WaitlistButton />
    </div>
    <div className='p-4'>
    <HeroSvg />
    </div>
    </section>
  )
}
