import { Testimonial } from "@/types";
import Image from "next/image";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div>
            <p>{testimonial.text}</p>
            <Image src={testimonial.imageUrl} alt="testimonials" width={60} height={60} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>excel
        </div>
    )
}

export default TestimonialCard;