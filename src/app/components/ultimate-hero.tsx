'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            <div className="inset-0">
                <Image
                    src="/test.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative text-center text-white px-6"
            >
                <h1 className="text-8xl md:text-6xl font-bold uppercase">
                    Unravel the Mysteries of K
                </h1>
                <p className="m-5 mx-70 max-w-prose text-lg md:text-xl leading-12 text-gray-100 bg-black/80 p-6 rounded-lg shadow-lg">
                    <span className="font-semibold text-pretty">K</span> is an
                    original animation series that is set in a slightly
                    different modern-day Japan, where 7 Kings each have their
                    own feuds and alliances. A young high school student somehow
                    finds himself involved in a battle between people with
                    unbelievable powers. The story is created by GoRA, 7 masked
                    authors, who have carefully crafted a story that includes
                    the unique writing abilities of each member.
                </p>
                <Link href="http://localhost:3000/">
                    <Button className="cursor-pointer shadow-black shadow-sm  rounded-4xl px-6 py-4 font-semibold text-lg gap-2 bg-white text-black hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                        Explore the Story
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
