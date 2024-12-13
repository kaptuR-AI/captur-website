import React from 'react'
import Image from 'next/image';
import ExtraSection from '@/components/landing-page/extra-section';
import { Navbar } from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import Banner from '@/components/layout/Banner';
import ExploreSection from '@/components/layout/Explore';
import FeatureSection from '@/components/layout/featureSection';
import InfoSection from '@/components/layout/infoSection';
import StatsSection from '@/components/layout/Statistic';

const TextDetection = () => {
  return (
      <div className="space-y-6">
          <Navbar />
          <FeatureSection
              title="Text Detection"
              description="Detects everything from subtle voice alterations to fully synthetic audio generation"
              imageSrc="/image-15.svg"
          />
          <StatsSection
              description="Sophisticated AI-generated text forgeries are becoming increasingly prevalent, creating significant risks for businesses and individuals alike. Deeptrack’s cutting-edge AI text detection technology identifies synthetic text patterns, safeguarding against phishing, fraud, and disinformation-driven manipulation."
              statistics={[
                  { value: '75%', description: 'of organizations report rising threats from AI-generated phishing and disinformation texts' },
                  { value: '60%', description: 'of CEOs Are Targeted by AI-Generated Business Emails' },
              ]}
          />
          <Banner
              banner={[
                  { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Identify AI-generated text with precision, uncovering subtle inconsistencies in style, tone, and syntax.' },
                  { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'Safeguard your business from text-based fraud and phishing attempts by exposing synthetic communication' },
                  { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Detect AI-generated fake news and misinformation before it spreads, ensuring the credibility of shared content.' },
                  { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Easily integrate AI text detection into your workflows, enhancing security and trust across platforms' },
              ]}
          />
          <div className="absolute md:right-[10%] md:top-[15%] h-[15%] w-[20%]">
              <div className="relative h-full w-full">
                  <div className="relative h-full w-full" />
                  <div className="relative h-full w-full">
                      <Image
                          src="/feature_vector.svg"
                          alt="Blue Lines"
                          width={400}
                          height={300}
                      />
                  </div>
              </div>
          </div>
          <InfoSection
              title="Deeptrack Image Authentication"
              description="Deeptrack image authentication leverages advanced multi-layer AI detection to analyze images with precision. Our technology identifies manipulations at the pixel level, detecting techniques such as GAN-based image synthesis, face swapping, and other forms of synthetic media.
          Every image scan delivers actionable insights, including the likelihood of manipulation, helping organizations swiftly identify AI-generated alterations. Deeptrack platform also employs explainable AI, offering clear visualizations and detailed feedback to empower users in combating fraud and disinformation effectively.
          Designed to scale, Deeptrack supports everything from processing a few images to managing billions, ensuring flexibility for businesses of any size. Access our solution through an intuitive web interface or seamlessly integrate it into your workflows via API."
              imageSrc="/image-14.svg"
          />
          <div>
              <ExploreSection
                  types={[
                      'Face Swap',
                      'AI-Avatar',
                      'Synthetic Faces',
                      'Lip Sync',
                      'AI-Generated Voice',
                      'Face Re-enactment',
                  ]}
              />
              <ExtraSection />
          </div>
          <Footer />
      </div>
  )
}

export default TextDetection;
