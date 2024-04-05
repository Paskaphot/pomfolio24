import SkillCard from "../molecules/SkillCard";
export default function List() {
    return (
        <ul className="w-full max-w-7xl p-10 mx-auto flex flex-wrap gap-6">
            <li className="cardWrapper"><SkillCard /></li>
            <li className="cardWrapper"><SkillCard /></li>
            <li className="cardWrapper"><SkillCard /></li>
        </ul>
    );
}