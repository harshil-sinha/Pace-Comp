import dynamic from 'next/dynamic';


import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Main = () => {
    return (
        <>
            <div className="lg:mx-32 md:mx-4">
                <Intro />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    );
};

export default Main;
