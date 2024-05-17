"use client"

import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills: React.FC = () => {
    const skills = [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Node Js', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'Express Js', level: 75 },
        // Add more skills as needed
    ];

    return (
        <section id="skills" className="my-10">
            <h2 className="text-3xl font-bold-2 text-center">Skills</h2>
            <div className="mt-4 ml-2 md:ml-0">
                {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-lg font-semibold">{skill.name}</p>
                        <ProgressBar completed={`${skill.level}`} animateOnRender={true}/>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
