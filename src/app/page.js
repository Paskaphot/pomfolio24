import NavHome from "./components/molecules/NavHome";
import About from "./components/organisms/About";
import List from "./components/organisms/List";
import ProjectCard from "./components/molecules/ProjectCard";

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
			<section id="skillSection" className="skillSection relative bg-secondary-light flex content-center">
				<List category="skills" />
			</section>
			<section id="projectSection" className="bg-red-600 flex content-center">
				<ProjectCard />
			</section>
			<section id="contactSection" className="flex content-center"></section>
		</main>
	</>
  );
}
