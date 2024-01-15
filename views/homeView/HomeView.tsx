import React from "react";
import styles from "./Home.module.scss";
import {
	Hero,
	HomeInfo,
	Platform,
	Categories,
	Listings,
	Gears,
	Equipments,
	Courses,
} from "@/components/home";

const HomeView = () => {
	return (
		<>
			<Hero />
			<HomeInfo />
			<Platform />
			<Categories />
			<Listings />
			<Gears />
			<Equipments />
			<Courses />
		</>
	);
};

export default HomeView;
