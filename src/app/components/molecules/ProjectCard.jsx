import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projet`} className="card bg-light rounded-2xl border border-dark pb-6 h-full overflow-hidden">
            <div className="card__thumbnail">
                <Image 
                    // src={project.thumbnail}
                    src="/images/supremes-top-home-588.webp"
                    width={588}
                    height={287}
                    // alt={`Capture d'écran du site /${project.title}`}
                    alt="Suprems Barmaids"
                />
            </div>
            <h3 className="card__title mt-4 px-6">
                Suprems Barmaids
                {/* {project.title} */}
                </h3>
            <p className="mt-4 text-lg px-6">
                Site web complet from scratch répertoriant et filtrant des centaines de recettes de cocktails.
                {/* {project.description} */}
                </p>
            <div className="mt-4 flex gap-2 justify-between items-baseline px-6">
                <mark>
                    Design UI + Dev Front
                    {/* {project.tasks} */}
                </mark>
                <div className="seeMore">
                    <span>Voir plus</span>&nbsp;
                    <IoIosArrowRoundForward />
                </div>
            </div>
        </Link>
    );
}
