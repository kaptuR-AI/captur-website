import { Testimonial } from "@/types";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../cards/testimonialCard";
import Image from "next/image";
export const dummyTestimonials: Testimonial[] = [
    {
      text: 'DeepFake has been a game-changer for our institution. The multi-model verification platform has helped us authenticate digital identities and prevent fraud effectively.',
      imageUrl: '/testimonial-1.svg',
      name: 'John Doe',
      role: 'CEO, Example Bank',
    },
    {
      text: 'I was impressed by the accuracy and reliability of DeepFake\'s synthetic media detection. It gives us confidence in the digital content we interact with.',
      imageUrl: '/testimonial-2.svg',
      name: 'Jane Smith',
      role: 'CIO, Acme Corporation',
    },
    {
      text: 'DeepFake has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
      imageUrl: '/testimonial-3.svg',
      name: 'Michael Johnson',
      role: 'COO, Fintech Startup',
    },
    {
        text: 'DeepFake has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
        imageUrl: '/testimonial-3.svg',
        name: 'Michael ',
        role: 'COO, Fintech Startup',
      },
      {
        text: 'DeepFake has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
        imageUrl: '/testimonial-2.svg',
        name: 'Michael Brans',
        role: 'COO, Fintech Startup',
      },
  ];
  
const TestimonialSection = () => {
    return (
        <section className="p-4">
            <h2 className="text-center font-extrabold mb-4 lg:text-4xl sm:text-2xl">Voices of Urgency</h2>
            <Image src="/Vector.svg" alt="Blue Lines" width={400} height={300} className="absolute -top-50 right-0 -z-10" />
            <Marquee pauseOnHover pauseOnClick >
            {dummyTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
            </Marquee>
        </section>
    )
}

export default TestimonialSection;