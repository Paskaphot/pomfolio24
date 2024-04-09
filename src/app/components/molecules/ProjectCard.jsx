import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projet`} className="card card__project rounded-lg pb-6 h-full overflow-hidden">
            <div className="card__thumbnail">
                <Image 
                    src={project.thumbnail}
                    width={588}
                    height={287}
                    alt={`Capture d'écran du site /${project.title}`}
                />
            </div>
            <h3 className="card__title mt-6 px-6">
                {project.title}
                </h3>
            <p className="mt-4 text-lg px-6">
                {project.description}
                </p>
            <div className="self-end mt-4 px-6 flex gap-2 justify-between items-baseline">
                <mark>
                    {project.scopes}
                </mark>
                <div className="seeMore">
                    <span>Voir plus</span>&nbsp;
                    <IoIosArrowRoundForward className="seeMore__icon"/>
                </div>
            </div>
        </Link>
    );
}
