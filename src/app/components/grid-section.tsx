import StaffCarousel from './staff-carousel';

export default function GridSection() {
    return (
        <div className="h-screen bg-[#1E1E1E]">
            <div className="grid grid-cols-2 place-items-center">
                <p className=" text-white text-2xl m-25 leading-loose">
                    The animation is done by{' '}
                    <span className="font-semibold">GoHands</span>, the same
                    studio behind <i>Mardock Scramble</i>.
                </p>
            </div>
            <div className="grid grid-cols-2 place-items-center">
                <StaffCarousel />
                <p className="mt-8 text-white text-2xl m-25 leading-loose">
                    The show is directed and features character designs by{' '}
                    <span className="font-semibold">Shingo Suzuki</span>, with
                    music by <span className="font-semibold">Mikio Endo</span> (
                    <i>Guilty Honey</i>) and animation direction by{' '}
                    <span className="font-semibold">Makoto Furuta</span> (
                    <i>Seitokai Yakuindomo</i>) The cast features many popular
                    voice actors, including{' '}
                    <span className="font-semibold">
                        Daisuke Namikawa, Daisuke Ono, Mikako Komatsu, Kenjiro
                        Tsuda,
                    </span>
                    and <span className="font-semibold">Tomokazu Sugita</span>.
                    The opening theme is performed by{' '}
                    <span className="font-semibold">Angela</span>, while the
                    ending is sung by{' '}
                    <span className="font-semibold">Mikako Komatsu</span>, both
                    gaining significant attention.
                </p>
            </div>
        </div>
    );
}
