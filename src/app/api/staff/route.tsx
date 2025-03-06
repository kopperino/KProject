import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
export const dynamic = 'force-static';

export async function GET() {
    try {
        const file = await fs.readFile(
            process.cwd() + '/src/app/data/staff.json',
            'utf8'
        );
        console.log(file);

        const data = JSON.parse(file);
        console.log(data);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
