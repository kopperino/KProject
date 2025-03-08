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
import { Speech } from 'lucide-react';

type Character = {
    id: number;
    name: string;
    voice_actor: string;
    age: number | string;
    height: number;
    description: string;
    quote: string;
    mugshot: string;
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
                            <CardTitle>{character.name}</CardTitle>
                        </CardHeader>

                        <CardContent className="grid grid-cols-2 place-items-center">
                            <div>
                                <CardDescription className="text-md">
                                    {character.description}
                                </CardDescription>
                                <CardDescription className="mt-5 italic">
                                    "{character.quote}"
                                </CardDescription>
                            </div>
                            <div>
                                <Image
                                    src={character.mugshot}
                                    width={150}
                                    height={150}
                                    alt={character.mugshot}
                                    className="shadow-xl rounded-xl"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <p className="flex gap-2 bg-amber-100 rounded-4xl px-3 py-2">
                                <Speech /> {character.voice_actor}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
