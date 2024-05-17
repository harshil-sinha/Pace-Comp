"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/harshil-sinha/repos');
                // console.log(response);

                setProjects(response.data.slice(0, 3)); // Limit to first three projects
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="project" className="my-10 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold-20 text-center">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {projects.map((project: any) => (
                    <div key={project.id} className="relative border border-gray-300 mb-5 rounded-lg overflow-hidden">
                        <div
                            key={project.id}
                            className="relative border border-gray-300  rounded-lg overflow-hidden transform hover:-translate-y-8 transition duration-300"
                        >
                            <div className="inset-0 flex items-center justify-center bg-black bg-opacity-10">
                                <div className="text-black text-center p-10 mt-5">
                                    <h3 className="text-xl font-bold mt-2">{project.name}</h3>
                                    <p className="text-sm mt-2">Language: {project.language}</p>
                                    <p className="text-sm mt-2">Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
                                    <button
                                        onClick={() => window.open(project.html_url, "_blank")}
                                        className="text-blue-400 hover:text-blue-300 inline-block mt-4 bg-transparent border no-underline border-blue-400 rounded px-3 py-1 p-3 transition duration-300 ease-in-out"
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
