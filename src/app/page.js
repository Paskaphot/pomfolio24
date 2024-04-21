import TitleH2 from "./components/atoms/TitleH2";
import NavHome from "./components/molecules/NavHome";
import About from "./components/organisms/About";
import List from "./components/organisms/List";

export const metadata = {
	title: "Pomfolio 2024 index",
	description: "Home Portfolio de Pascaline Pierre, développeuse frontend",
};

export default function Home() {
  return (
	<>
		<header>
			<NavHome />
		</header>
		<main className="home">
			<About />
			<section id="skillSection" className="skillSection relative bg-secondary-light flex items-center justify-center">
				<div className="flex flex-col gap-12 w-full max-w-7xl p-10">
					<TitleH2 text="Compétences" colorVar="dark"></TitleH2>
					<List category="skill" />
				</div>
			</section>
			<section id="projectSection" className="projectSection flex items-center justify-center">
				<div className="flex flex-col gap-12 w-full max-w-7xl p-10">
					<TitleH2 text="Projets" colorVar="secondary"></TitleH2>
					<List category="projets" />
				</div>
			</section>
			<section id="contactSection" className="contactSection flex items-center justify-center">
				<div className="flex flex-col gap-12 w-full max-w-7xl p-10">
					<TitleH2 text="Contact" colorVar="dark"></TitleH2>
				</div>
			</section>
		</main>
	</>
  );
}
