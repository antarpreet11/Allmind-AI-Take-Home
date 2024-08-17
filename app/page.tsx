import Header from '../components/Header';
import Main from '../components/Main';
import MainPageSection from '../components/MainPageContent';
import DemoSection from '../components/Demo';
import Footer from '../components/Footer';
import MiddleSections from '../components/MiddleSections';
import '../globals.css';

export default function Page() {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <MainPageSection></MainPageSection>
            <DemoSection></DemoSection>
            <MiddleSections></MiddleSections>
            <Footer></Footer>
        </>
    )
}