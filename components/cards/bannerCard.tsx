import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image';


interface Banner {
    icon: string
    title: string
    description: string
}
export const BannerCard = ({ icon, title, description }: Banner) => {
    return (
        <Card
            data-aos="fade-up"
            className="bg-card-gradient flex flex-col justify-center items-center border border-customTeal max-w-[30rem] text-white p-4 rounded-lg shadow-lg"
        >
            <CardHeader className="flex flex-col items-center text-center">
                <CardTitle className="flex flex-col items-center">
                    <Image
                        src={icon}
                        alt="Icon"
                        className="mb-2"
                        width={100}
                        height={100}
                    />
                    <p className="text-2xl py-2 px-5 rounded-md">{title}</p>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p>{description}</p>
            </CardContent>
        </Card>
    );
};