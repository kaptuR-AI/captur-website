import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { WaitlistButton } from '../landing-page/waiting-list'
import FeatureSvg from '../layout/FeatureSvg'

interface FeatureSectionProps {
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

const FeatureSection = ({title, description, buttonText, onButtonClick}: FeatureSectionProps) => {
  return (
    <>
    <section className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
    {/* Left Section */}
    <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-6">
      <h1 className="text-4xl sm:text-5xl font-semibold">{title}</h1>
      <p className="text-lg leading-relaxed max-w-lg">
      {description}
      </p>
      <WaitlistButton />
    </div>

    {/* Right Section */}
    <div className="flex justify-center lg:justify-end p-6 mt-6">
      <FeatureSvg imageSrc="/image-9.svg" altText="Feature section image" />
    </div>
    </section>
    <div className='bg-customTeal max-w-7xl mx-auto mt-4' style={{ height: '1px' }}/>
    </>
  )
}

export default FeatureSection