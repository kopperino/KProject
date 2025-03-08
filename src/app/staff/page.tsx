import NavBar from '../components/navbar';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type CastMember = {
    id: string | number;
    character: string;
    voice_actor: string;
};

type StaffMember = {
    id: string | number;
    name: string;
    role: string;
};

export default async function StaffPage() {
    const res = await fetch('http://localhost:3000/api/cast');
    const data: CastMember[] = await res.json();

    const staff_res = await fetch('http://localhost:3000/api/staff');
    const staff_data: StaffMember[] = await staff_res.json();

    return (
        <div>
            <NavBar />
            <Table className="max-w-screen-lg mt-10 shadow-md rounded-2xl overflow-hidden mx-auto">
                <TableCaption>A list of cast members</TableCaption>
                <TableHeader className="">
                    <TableRow className="bg-black rounded-2xl hover:bg-black">
                        <TableHead className="font-extrabold text-center text-white">
                            Voice Actor
                        </TableHead>
                        <TableHead className="font-extrabold text-center text-white">
                            Character
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((castMember: CastMember) => (
                        <TableRow key={castMember.id}>
                            <TableCell className="text-center">
                                {castMember.voice_actor}
                            </TableCell>
                            <TableCell className="text-center">
                                {castMember.character}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Table className="max-w-screen-lg mt-10 shadow-md rounded-2xl overflow-hidden mx-auto">
                <TableCaption>A list of staff members</TableCaption>
                <TableHeader className="">
                    <TableRow className="bg-black rounded-2xl hover:bg-black">
                        <TableHead className="font-extrabold text-center text-white">
                            Staff
                        </TableHead>
                        <TableHead className="font-extrabold text-center text-white">
                            Role
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {staff_data.map((staffMember: StaffMember) => (
                        <TableRow key={staffMember.id}>
                            <TableCell className="text-center">
                                {staffMember.name}
                            </TableCell>
                            <TableCell className="text-center">
                                {staffMember.role}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
