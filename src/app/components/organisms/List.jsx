import { getSkills } from "@/lib/getSkills";
import SkillCard from "../molecules/SkillCard";
import { getProjects } from "@/lib/getProjects";
import ProjectCard from "../molecules/ProjectCard";
export default async function List({ category }) {

    const skills = await getSkills();
    const projects = await getProjects();

    return (
        <ul className={`w-full max-w-7xl p-10 mx-auto flex flex-wrap gap-8 justify-center list__${category}`}>
        {/* <ul className="w-full max-w-7xl p-10 mx-auto flex flex-wrap gap-8 justify-center list__project"> */}
            {/* {`${category}+s`}.map((${category}) => (
                    <li key={${category}.id} className={`cardWrapper cardWrapper__${category}`} >
                        {category === "skill"
                        ? <SkillCard skill={skill}/>
                        : <ProjectCard project={project}/>
                    </li>
            } */}

            {category === "skill"
                ? skills.map((skill) => (
                    <li key={skill.id} className="cardWrapper cardWrapper__skill"><SkillCard skill={skill}/></li>
                ))
                : projects.map((project) => (
                    <li key={project.id} className="cardWrapper cardWrapper__project"><ProjectCard project={project}/></li>
                ))
            }
        </ul>
    );
}