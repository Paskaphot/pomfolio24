import { getSkills } from "@/lib/getSkills";
import SkillCard from "../molecules/SkillCard";
export default async function List({ category }) {

    const skills = await getSkills();

    return (
        <ul className="w-full max-w-7xl p-10 mx-auto flex flex-wrap gap-6">
            {skills.map((skill) => (
                <li key={skill.id} className="cardWrapper">
                    <SkillCard skill={skill}/>
                </li>
            ))}
        </ul>
    );
}