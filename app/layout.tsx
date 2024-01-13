import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import "@/styles/index.scss";
import { Footer, Header } from "@/shared";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gear Up",
	description: "Marketplace to get everything gears",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sourceSans.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
