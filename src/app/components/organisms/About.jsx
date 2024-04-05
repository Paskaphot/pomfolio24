import Image from "next/image";

export default function About() {
    return (
        <article className="aboutSection max-w-7xl px-10 py-6 mx-auto grid gap-8 grid-cols-1 auto-rows-min md:grid-cols-6 content-center">
            <h1 className="md:col-start-1 md:col-end-7 lg:col-end-5">
                <span className="block clamp-l">Développeuse <span className="text-primary">Front</span></span>
                <span className="block clamp-m">avec <span className="text-secondary">background UI</span></span>
            </h1>
            <div className="md:col-start-4 md:col-end-7 md:row-start-2 md:row-end-3 lg:col-start-5 lg:col-end-7 lg:row-start-1 flex items-center justify-center">
                <Image 
                    src="/images/top-fixed-apples.svg"
                    width={434}
                    height={382}
                    alt="Deux pommes rouges dessinées"
                    className="max-w-full"
                />
            </div>
            <div className="md:col-start-1 md:col-end-4 lg:col-end-5">
                <p className="text-lg xl:text-xl">Je suis Pascaline Pierre. Je construis des interfaces web et des produits numériques pixel-perfect en mettant l&apos;accent sur l&apos;accessibilité et l&apos;expérience utilisateur.</p>
                <p className="text-lg xl:text-xl mt-2">Venant de Normandie et résidant maintenant à Paris, je pratique le yoga et la boxe. J&apos;aime le cinéma des années 70 et je collectionne les appareils photo anciens.</p>
            </div>
        </article>
    );
}