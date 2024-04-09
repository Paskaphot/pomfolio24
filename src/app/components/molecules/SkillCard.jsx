import Image from "next/image";

export default function SkillCard({ skill }) {
    return (
        <div className=" bg-light px-6 pb-6 rounded-lg h-full">
            <h3 className="card__title flex gap-4 items-end">
                <span aria-hidden="true" focusable="false" className="card__seal bg-secondary text-light">
                    <Image 
                        src={skill.icon}
                        width={32}
                        height={32}
                        alt=""
                    />
                </span>
                <span>{skill.title}</span>
            </h3>
            <p className="mt-4 text-lg">{skill.description}</p>
            <mark className="mt-4 block">{skill.tools}</mark>
        </div>
    );
}
