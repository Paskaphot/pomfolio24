import Image from "next/image";

export default function SkillCard({ skill }) {
    return (
        <div className="skillCard bg-light px-6 pb-6 rounded-2xl h-full">
            <h3 className="skillCard__title flex gap-4 items-end">
                <span aria-hidden="true" focusable="false" className="skillCard__seal bg-secondary text-light">
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
            <p className="mt-4 text-xl font-bold">{skill.tools}</p>
        </div>
    );
}
