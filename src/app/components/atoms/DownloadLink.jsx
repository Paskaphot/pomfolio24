import Link from 'next/link';
import { IoMdDownload } from "react-icons/io";

export default function DownloadLink() {
    return (
        <Link 
            href="/download/CV_PPIERRE_DevFront_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center rounded-2xl text-lg text-light bg-primary font-bold pl-4 pr-6 py-3 transform-transition hover:scale-105 hover:bg-dark">
            <IoMdDownload />
            <span>CV</span>
        </Link>
    );
}