import { headerItems, userInfo } from "../constants/constant";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Intro: React.FC = () => {
    return (
        <>
            <section id={headerItems.about.page} className="h-screen flex flex-col text-center justify-center items-center md:flex-row" >
                <div>
                    <Image src={userInfo.picture} alt="dp_logo" width={300} height={300} className="shadow-2xl rounded-full" />
                </div>
                <div className="md:ml-20 sm:ml-12 md:w-1/2">
                    <h1 className="text-5xl uppercase hidden md:block">Full Stack Developer</h1>
                    <h1 className="text-2xl mt-5 md:text-3xl text-center">
                        Hi, I&#39;m <span className="text-red-600 text-3xl">{userInfo.name}</span>
                    </h1>
                    <div className="flex justify-center mt-6 space-x-4">
                        <a href="https://www.linkedin.com/in/theharshilsinha/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="text-blue-700 hover:text-blue-500 transition duration-300" />
                        </a>
                        <a href="https://github.com/harshil-sinha" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="text-black hover:text-gray-700 transition duration-300" />
                        </a>
                        <a href="https://www.instagram.com/harshil__hs/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="text-pink-500 hover:text-pink-300 transition duration-300" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;
