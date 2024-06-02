import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/index.scss";
import styles from "./layout.module.scss";
import { Footer, Header } from "@/shared";

import Providers from "@/Providers";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gear Up",
	description: "Marketplace to get everything gears",
};

// function GlobalHooks() {
// 	useFetchAll();
// 	return null;
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sourceSans.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
