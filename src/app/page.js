import NavHome from "./components/molecules/NavHome";
import About from "./components/organisms/About";
import SkillCard from "./components/molecules/SkillCard";

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
			<section id="skillSection" className="skillSection relative bg-secondary-light">
				<ul className="max-w-7xl px-10 py-40 mx-auto">
					<li><SkillCard /></li>
				</ul>
			</section>
			<section id="projectSection" className="min-h-screen bg-red-600"></section>
			<section id="contactSection" className="min-h-screen"></section>
		</main>
	</>
  );
}
