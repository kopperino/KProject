type CastMember = {
    id: string | number;
    character: string;
    voice_actor: string;
};

export default async function StaffPage() {
    const res = await fetch("http://localhost:3000/api/cast");
    const data: CastMember[] = await res.json();

    return (
        <>
        <h1>Character Page</h1>
        <ul>
        {data.map((castMember: CastMember) => (
            <li key={castMember.id}>
                {castMember.character} - Voiced by {castMember.voice_actor}
            </li>
        ))}
        </ul>
        </>
    )
}