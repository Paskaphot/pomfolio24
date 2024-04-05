import { IoMdColorPalette } from "react-icons/io";

export default function SkillCard() {
    return (
        <div className="skillCard bg-light px-6 pb-6 rounded-2xl h-full">
            <h3 className="skillCard__title flex gap-4 items-end">
                <span aria-hidden="true" focusable="false" className="skillCard__seal bg-secondary text-light"><IoMdColorPalette /></span>
                <span className="">Design / UI</span>
            </h3>
            <p className="mt-4 text-lg">Mon background graphique me permet de coder des rendus pixel-perfect, de travailler efficacement avec un design system, et de proposer des améliorations. J’affine la communication transverse entre équipes tech et design.</p>
            <p className="mt-4 text-xl font-bold">Photoshop • Figma</p>
        </div>
    );
}