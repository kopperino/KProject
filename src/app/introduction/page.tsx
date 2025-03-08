import Footer from '../components/footer';
import Hero from '../components/hero';
import NavBar from '../components/navbar';

export default function IntroductionPage() {
    return (
        <>
            <div className="bg-gradient-to-tr from-[#66D2CE] to-[#EAEAEA] min-h-screen">
                <NavBar />
                <Hero />
                <Footer />
            </div>
        </>
    );
}
