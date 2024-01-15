import React from "react";
import styles from "./Home.module.scss";
import { Hero, HomeInfo, Platform, Categories, Listings, Gears } from "@/components/home";

const HomeView = () => {
	return (
		<>
			<Hero />
			<HomeInfo />
			<Platform />
			<Categories />
			<Listings />
			<Gears />
		</>
	);
};

export default HomeView;
