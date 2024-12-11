'use client'

import { Navbar } from '@/components/landing-page/navbar';
import FeatureSection from '@/components/layout/featureSection';
import React from 'react'

const ImageAuthenticationPage = () => {
  return (
   <>
    <Navbar />
      <FeatureSection 
      title="Image Authentication"
      description="Detects everything from subtle edits to full synthetic generation."
      buttonText="Join Our Waiting List "
      onButtonClick={() => console.log("Get Started")}
    />
    
   </>
  )
}

export default ImageAuthenticationPage;
