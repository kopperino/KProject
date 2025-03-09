import Image from 'next/image';
import NavBar from '../components/navbar';
import { motion } from 'motion/react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Calendar, Ruler, Speech } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import CharacterCard from '../components/character-card';

type Character = {
    id: number;
    name: string;
    voice_actor: string;
    age: number | string;
    height: number;
    description: string;
    quote: string;
    mugshot: string;
    myanimelist: string | null;
};

async function getData() {
    const url = 'http://localhost:3000/api/character';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const json: Character[] = await response.json();
    console.log(json);
    return json;
}

export default async function CharacterPage() {
    const data = await getData();
    return (
        <>
            <NavBar />
            <CharacterCard characters={data} />
        </>
    );
}
