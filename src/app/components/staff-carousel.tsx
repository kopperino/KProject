'use client';

import { type CarouselApi } from '@/components/ui/carousel';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import { useState, useEffect } from 'react';

export default function Example() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                <CarouselItem className="flex justify-center items-center">
                    <Image
                        src="/staff/Daisuke_Namikawa.jpg"
                        alt="Test"
                        height={150}
                        width={150}
                    />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                    <Image
                        src="/staff/Daisuke_Namikawa.jpg"
                        alt="Test"
                        height={150}
                        width={150}
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
