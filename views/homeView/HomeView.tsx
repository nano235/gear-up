import React from "react";
import styles from "./Home.module.scss";
import { Hero, HomeInfo, Platform, Categories, Listings } from "@/components/home";

const HomeView = () => {
	return (
		<>
			<Hero />
			<HomeInfo />
			<Platform />
			<Categories />
			<Listings />
		</>
	);
};

export default HomeView;
