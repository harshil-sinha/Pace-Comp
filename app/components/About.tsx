import { userInfo } from "../constants/constant";

const About: React.FC = () => {
    return (
        <section id="about" className="my-20 p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="md:w-1/3 mb-6 md:mb-0 star">
                    <img
                        src="./dp-3.png"
                        alt="Profile picture"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div className="md:ml-8 md:w-2/3">
                    <h2 className="text-4xl font-bold-20 text-center mb-6">About Me</h2>
                    <div className="mt-4 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: userInfo.about }} />
                    <div className="mt-8 flex justify-center">
                        <a
                            href={userInfo.resume}
                            download="Harshil_Sinha_Resume.pdf"
                            className="bg-transparent hover:bg-gray-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
