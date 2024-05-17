import { UserObject } from "../models/User"
import { NavItems } from "../models/Header"

export const userInfo: UserObject = {
    name: "Harshil",
    picture: "/one.png",
    resume: '/harshil.pdf',
    img2 : "/dp-3.png",
    about: `
        <p>My name is Harshil Sinha. I’m a graduate of 2022 from Veer Kunwar SIngh University at Bihar with a degree in Bachelor of Computer Application . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of full stack developer. In my free time I like working on open source projects.</p>
    `,
    skills: ['React', 'Next Js', 'Data Structure', 'Java', 'MongoDB', 'MySQL', 'HTML', 'CSS'],
};

export const headerItems: NavItems = {
    project: { label: "Projects", page: "project" },
    resume: { label: "Resume", page: "resume" },
    about: { label: "About", page: "about" },
    skills: { label: "Skills", page: "skills" }
};