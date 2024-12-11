import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface FeatureSectionProps {
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

const FeatureSection = ({title, description, buttonText, onButtonClick}: FeatureSectionProps) => {
  return (
    <section className="relative bg-black py-20 max-w-7xl m-auto mb-6">      
      <div className="container px-4 md:px-6">
        <div className="grid min-h-[500px] items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 p-4">
            <div className="space-y-2 p-4">
              <h1 className="text-3xl font-bold tracking-normal text-white sm:text-5xl xl:text-6xl/none">
                {title}
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl pt-6">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row p-0.5 rounded-xl bg-white">
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-4 border-black bg-transparent px-8 text-sm font-semibold text-black bg-white hover:bg-customTeal"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[400px] w-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-700 opacity-20 blur-3xl" />
              <Image 
                src={'/image-9.svg'}
                alt="Feature section image"
                width={765}
                height={452}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-[#54F4FC] h-[1px]'/>
    </section>
  )
}

export default FeatureSection
