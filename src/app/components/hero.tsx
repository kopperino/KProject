import Image from 'next/image';

export default function Hero() {
    return (
        <div className="">
            <h1 className="text-[#229799] font-extrabold text-center m-10 text-5xl">
                INTRODUCTION
            </h1>
            <div className="m-15 bg-[#229799] rounded-xl p-10 shadow-2xl grid grid-cols-2">
                <div className="grid place-items-center">
                    <p className=" text-white text-xl leading-10">
                        <span className="font-semibold text-pretty">K</span> is
                        an original animation series filled with mysteries upon
                        mysteries. The story is set in a slightly different
                        modern-day Japan, where 7 Kings each have their own
                        feuds and alliances. A young high school student somehow
                        finds himself involved in a battle between people with
                        unbelievable powers. The story is created by{' '}
                        <span className="font-semibold">GoRA</span>, 7 masked
                        authors, who have carefully crafted a story that
                        includes the unique writing abilities of each member.
                    </p>
                </div>
                <div className="grid place-items-center">
                    <Image
                        src="/introduction/K_Image.jpg"
                        width={300}
                        height={150}
                        alt="K"
                        className=""
                    />
                </div>
                <div className="grid place-items-center">
                    <Image
                        src="/introduction/GoHands_Logo.png"
                        width={150}
                        height={150}
                        alt="Gohands"
                        className="grid place-items-center"
                    />
                </div>
                <div className="grid place-items-center">
                    <p className="text-pretty text-white mt-8 text-xl leading-10">
                        The animation is done by{' '}
                        <span className="font-semibold">GoHands</span>, the same
                        studio behind <i>Mardock Scramble</i>. The show is
                        directed and features character designs by{' '}
                        <span className="font-semibold">Shingo Suzuki</span>,
                        with music by{' '}
                        <span className="font-semibold">Mikio Endo</span> (
                        <i>Guilty Honey</i>) and animation direction by{' '}
                        <span className="font-semibold">Makoto Furuta</span> (
                        <i>Seitokai Yakuindomo</i>)—a truly amazing group of
                        staff!
                    </p>
                </div>
                <div className="grid place-items-center">
                    <p className="mt-8 text-white text-pretty text-xl leading-10">
                        The cast features many popular voice actors, including{' '}
                        <span className="font-semibold">
                            Daisuke Namikawa, Daisuke Ono, Mikako Komatsu,
                            Kenjiro Tsuda,
                        </span>
                        and{' '}
                        <span className="font-semibold">Tomokazu Sugita</span>.
                        The opening theme is performed by{' '}
                        <span className="font-semibold">Angela</span>, while the
                        ending is sung by{' '}
                        <span className="font-semibold">Mikako Komatsu</span>,
                        both gaining significant attention.
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <Image
                        src="/introduction/Daisuke_Namikawa.jpg"
                        width={150}
                        height={150}
                        alt="Gohands"
                        className="grid place-items-center"
                    />
                    <Image
                        src="/introduction/Daisuke_Ono.jpg"
                        width={150}
                        height={150}
                        alt="Gohands"
                        className="grid place-items-center"
                    />
                </div>
                <div className="grid place-items-center mt-10">
                    <Image
                        src="/introduction/Magazine_Promotional_Artwork.png"
                        width={300}
                        height={300}
                        alt="Gohands"
                    />
                </div>
                <div className="grid place-items-center mt-10">
                    <p className="mt-8 text-white text-pretty text-xl leading-10">
                        A manga adaptation by{' '}
                        <span className="font-semibold">Yui Kuroe</span>, titled{' '}
                        <i>K -Memory of Red-</i>, will be serialized in{' '}
                        <span className="font-semibold">Kodansha ARIA</span>,
                        telling the prelude of the anime’s story. Additionally,
                        starting in November, a novel series based on <i>K</i>{' '}
                        will be released in three volumes. The series will be
                        available in multiple formats for fans to enjoy.
                    </p>
                </div>
            </div>
        </div>
    );
}
