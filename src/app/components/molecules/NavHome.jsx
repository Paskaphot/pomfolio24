import DownloadLink from "../atoms/DownloadLink";
import InternalLink from "../atoms/InternalLink";

export default function NavHome() {
    return (
        <nav className="max-w-7xl px-10 py-14 mx-auto">
            <ul className="flex justify-end items-center gap-4">
                <li><InternalLink toAnchor="#skillSection" sectionName="Compétences" /></li>
                <li><InternalLink toAnchor="#projectSection" sectionName="Projets" /></li>
                <li><InternalLink toAnchor="#contactSection" sectionName="Contact" /></li>
                <li><DownloadLink /></li>
            </ul>
        </nav>
    );
}