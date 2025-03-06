'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center bg-amber-300">
            <div className="hover:opacity-70 ml-6">
                <Link href="/">
                    <Image
                        src="/K_official_logo.webp"
                        alt="K"
                        width={150}
                        height={150}
                    />
                </Link>
            </div>
            <ul className="flex mx-auto justify-center gap-10 m-10 font-bold">
                <li
                    className={
                        pathname === '/introduction' ? 'text-blue-600' : ''
                    }
                >
                    <Link href="/introduction">INTRODUCTION</Link>
                </li>
                <li className={pathname === '/story' ? 'text-blue-600' : ''}>
                    <Link href="/story">STORY</Link>
                </li>
                <li
                    className={pathname === '/character' ? 'text-blue-600' : ''}
                >
                    <Link href="/character">
                        <h1>CHARACTER</h1>
                    </Link>
                </li>
                <li className={pathname === '/staff' ? 'text-blue-600' : ''}>
                    <Link href="/staff">STAFF / CAST</Link>
                </li>
            </ul>
        </nav>
    );
}
