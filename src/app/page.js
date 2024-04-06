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
			<section id="skillSection" className="skillSection relative bg-secondary-light flex flex-wrap content-center">
				<List category="skills" />
			</section>
			<section id="projectSection" className="bg-red-600 flex-wrap content-center"></section>
			<section id="contactSection" className="flex-wrap content-center"></section>
		</main>
	</>
  );
}
