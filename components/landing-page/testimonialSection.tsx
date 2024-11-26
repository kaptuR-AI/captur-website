import { Testimonial } from "@/types";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../cards/testimonialCard";

export const dummyTestimonials: Testimonial[] = [
    {
      text: 'Captur has been a game-changer for our institution. The multi-model verification platform has helped us authenticate digital identities and prevent fraud effectively.',
      imageUrl: '/testimonial1.jpg',
      name: 'John Doe',
      role: 'CEO, Example Bank',
    },
    {
      text: 'I was impressed by the accuracy and reliability of Captur\'s synthetic media detection. It gives us confidence in the digital content we interact with.',
      imageUrl: '/testimonial2.jpg',
      name: 'Jane Smith',
      role: 'CIO, Acme Corporation',
    },
    {
      text: 'Captur has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
      imageUrl: '/testimonial3.jpg',
      name: 'Michael Johnson',
      role: 'COO, Fintech Startup',
    },
    {
        text: 'Captur has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
        imageUrl: '/testimonial3.jpg',
        name: 'Michael ',
        role: 'COO, Fintech Startup',
      },
      {
        text: 'Captur has streamlined our identity verification process and reduced our fraud risk significantly. The platform is easy to integrate and provides valuable insights.',
        imageUrl: '/testimonial3.jpg',
        name: 'Michael Brans',
        role: 'COO, Fintech Startup',
      },
  ];
  
const TestimonialSection = () => {
    return (
        <section className="p-4">
            <h2 className="text-center font-extrabold mb-4 lg:text-4xl sm:text-2xl">Voices of Urgency</h2>
            <Marquee >
            {dummyTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
            </Marquee>
        </section>
    )
}

export default TestimonialSection;