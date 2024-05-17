'use client';

import { useState } from 'react';
import { userInfo, headerItems } from "../constants/constant";
import { IoMdMenu } from "react-icons/io";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{`< ${userInfo.name} />`}</h2>
                <IoMdMenu size={30} className="md:hidden cursor-pointer" onClick={toggleMenu} />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block transition-opacity duration-300 ease-in-out`}>
                {Object.values(headerItems).map(item => (
                    <a key={item.label} className="block md:inline-block" href={`#${item.page}`}>{item.label}</a>
                ))}
            </div>
        </header>
    );
};

export default Header;
