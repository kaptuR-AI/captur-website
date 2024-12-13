'use client'

import ExtraSection from "@/components/landing-page/extra-section"
import Footer from "@/components/landing-page/footer"
import { Navbar } from "@/components/landing-page/navbar"
import Banner from "@/components/layout/Banner"
import ExploreSection from "@/components/layout/Explore"
import FeatureSection from "@/components/layout/featureSection"
import InfoSection from "@/components/layout/infoSection"
import StatsSection from "@/components/layout/Statistic"
import Image from 'next/image'

const AudioAuthenticationPage = () => {
  return (
      <div className="space-y-6">
          <Navbar />
          <FeatureSection
              title="Audio Authentication"
              description="Detects everything from subtle voice alterations to fully synthetic audio generation "
              imageSrc="/audioImage.svg"
          />
          <StatsSection
              description="Sophisticated AI-generated voice forgeries are rapidly advancing, creating new vulnerabilities for businesses and individuals alike. Deeptrack cutting-edge voice authentication technology detects synthetic voice patterns, protecting against identity theft, fraud, and impersonation-driven disinformation."
              statistics={[
                  { value: '90%', description: 'of CEOs Cannot Distinguish Cloned Voices' },
                  { value: '85%', description: 'of Fraudulent Call Attempts Use Cloned Voices' },
              ]}
          />
          <Banner
              banner={[
                  { icon: '/svg-icons/detection.svg', title: 'Advanced Detection', description: 'Leverage AI-powered analysis to detect synthetic voices, uncovering even the most subtle manipulations in pitch, tone, and frequency.”' },
                  { icon: '/svg-icons/protection.svg', title: 'Fraud Protection', description: 'Protect your organization from voice-enabled fraud, securing transactions, communications, and sensitive data.' },
                  { icon: '/svg-icons/injection.svg', title: 'Stop Injection Impersonations', description: 'Detect cloned voices and stop impersonation attempts before they compromise trust or operations' },
                  { icon: '/svg-icons/platform.svg', title: 'Platform Agnostic', description: 'Integrate voice authentication into your workflows effortlessly, ensuring secure and scalable operations across platforms.' },
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
            imageSrc="/image-13.svg"
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

export default AudioAuthenticationPage
