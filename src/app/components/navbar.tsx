'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export default function NavBar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNav = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center bg-[#F5F5F5] w-full shadow-[0_4px_6px_#229799]">
            <div className="hover:opacity-70 ml-6 flex-grow ">
                <Link href="/">
                    <Image
                        src="/K_official_logo.webp"
                        alt="K"
                        width={150}
                        height={150}
                    />
                </Link>
            </div>

            <ul className="flex justify-end mr-10 gap-10 font-bold">
                <li
                    className={
                        pathname === '/introduction'
                            ? 'text-[#229799]'
                            : 'text-[#424242] hover:text-[#229799]'
                    }
                >
                    <Link href="/introduction">INTRODUCTION</Link>
                </li>
                <li
                    className={
                        pathname === '/story'
                            ? 'text-[#229799]'
                            : 'text-[#424242] hover:text-[#229799]'
                    }
                >
                    <Link href="/story">STORY</Link>
                </li>
                <li
                    className={
                        pathname === '/character'
                            ? 'text-[#229799]'
                            : 'text-[#424242] hover:text-[#229799]'
                    }
                >
                    <Link href="/character">
                        <h1>CHARACTER</h1>
                    </Link>
                </li>
                <li
                    className={
                        pathname === '/staff'
                            ? 'text-[#229799]'
                            : 'text-[#424242] hover:text-[#229799]'
                    }
                >
                    <Link href="/staff">STAFF</Link>
                </li>
            </ul>
            <div className="md:hidden" onClick={handleNav}>
                {isMobileMenuOpen ? (
                    <XIcon className="h-5 w-5" />
                ) : (
                    <MenuIcon className="h-5 w-5" />
                )}
            </div>
        </nav>
    );
}
