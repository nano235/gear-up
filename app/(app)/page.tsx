"use client";

import { HomeView } from "@/views";
import { useCallback, useEffect } from "react";

export default function Home() {
	const init = useCallback(async () => {
		// check if device is mobile
		const width = window.innerWidth;
		const ismobile: boolean = width <= 650;

		// import animations
		const App = (await import("@/animations")).App;

		// initialize new animation
		new App({ ismobile });
	}, []);

	useEffect(() => {
		init();
	}, []);
	return <HomeView />;
}
