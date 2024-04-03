import Link from 'next/link'

export default function InternalLink({ toAnchor, sectionName }) {
    return (
        <Link href={toAnchor} className="block text-lg font-bold px-6 py-3 transform-transition hover:scale-105 hover:text-primary">{sectionName}</Link>
    );
}