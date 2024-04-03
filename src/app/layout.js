import { Calistoga } from "next/font/google";

import "./globals.css";

const calistoga = Calistoga({ 
	subsets: ["latin"],
	variable: '--font-calistoga-400',
	weight: "400",
});

export const metadata = {
	title: "Pomfolio 2024",
	description: "Portfolio de Pascaline Pierre, développeuse frontend",
};

export default function RootLayout({ children }) {
 return (
	<html lang="fr" className={`${calistoga.variable}`}>
		<body className="bg-light min-h-screen font-body">{children}</body>
	</html>
  )
}
