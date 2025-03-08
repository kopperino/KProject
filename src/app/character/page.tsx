import Image from 'next/image';
import Hero from '../components/hero';
import NavBar from '../components/navbar';

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
            <div className="m-5 grid grid-cols-2 gap-4">
                {data.map((character) => (
                    <Card key={character.id} className="hover:bg-amber-100">
                        <CardHeader>
                            <CardTitle className="font-bold text-md md:text-2xl">
                                {character.name}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid grid-cols-1 md:grid-cols-2">
                            <div className="max-h-32 overflow-auto">
                                <CardDescription className="text-md">
                                    {character.description}
                                </CardDescription>
                                <CardDescription className="mt-5 italic">
                                    "{character.quote}"
                                </CardDescription>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <Image
                                    src={character.mugshot}
                                    width={150}
                                    height={150}
                                    alt={character.mugshot}
                                    className="shadow-xl rounded-xl mx-auto"
                                />
                                <div className="flex flex-wrap justify-center gap-2 mt-5 flex-col sm:flex-row place-items-center">
                                    <div className="flex gap-2">
                                        <Badge className="px-5 py-1">
                                            <Calendar />
                                            <p>{character.age}</p>
                                        </Badge>
                                    </div>
                                    <div className="flex gap-2">
                                        <Badge className="px-2 py-1">
                                            <Ruler />
                                            <p>{character.height}cm</p>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <Link
                            href={character.myanimelist ?? '#'}
                            target="_blank"
                        >
                            <CardFooter>
                                <p className="flex justify-center sm:justify-start gap-2 bg-amber-100 rounded-4xl px-3 py-2 border-2 border-black transition-transform duration-200 ease-in-out transform hover:scale-105 text-sm mx-auto truncate md:text-md md:ml-0 min-w-[150px]">
                                    <Speech className="hidden md:block" />{' '}
                                    {character.voice_actor}
                                </p>
                            </CardFooter>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    );
}
