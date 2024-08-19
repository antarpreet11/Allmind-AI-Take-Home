import Header from '../components/Header';
import Hero from '../components/Hero';
import MainPageSection from '../components/MainPageContent';
import DemoSection from '../components/Demo';
import Footer from '../components/Footer';
import MiddleSections from '../components/MiddleSections';
import '../globals.css';

export default function Page() {
    return (
        <main style={{ backgroundColor: 'var(--color-base-100)' }}>
            <Hero />
            <MainPageSection />
            <DemoSection />
            <MiddleSections />
            <Footer />
        </main>
    )
}