import { FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="my-10 bg-gray-100 p-6 md:p-10 rounded-lg">
            <h2 className="text-3xl font-bold-2 text-center mb-5">Get in Touch</h2>
            <p className="mt-5 mb-5 text-center">I'm currently looking for full-time Full Stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <a href="mailto:harshilsinha17@gmail.com" className="text-blue-500 hover:underline">harshilsinha17@gmail.com</a></p>
            <div className="flex justify-center items-center">
                <a href="https://github.com/harshil-sinha" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    <FaGithub size={30} />
                    </a>
            </div>
        </section>
    );
};

export default Contact;
