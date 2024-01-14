import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { SearchBox } from "@/shared";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.text}>
				<h1>The Marketplace For African Creators to Rent, Buy & Sell Gears</h1>
				<p>
					Rent, buy, or sell gears with ease within your country. Our secure
					escrow system ensures worry-free transactions
				</p>
			</div>
			<div className={styles.search}>
				<SearchBox />
			</div>
			<div className={styles.row}>
				<div className={styles.textbox}>
					<h2>12,000+</h2>
					<p>Trusted members (Verified)</p>
				</div>
				<div className={styles.textbox}>
					<h2>10,000+</h2>
					<p>Listings to choose from</p>
				</div>
				<div className={styles.textbox}>
					<h2>4.84/5</h2>
					<p>Feedbacks</p>
				</div>
			</div>
			<div className={styles.hero_image_container}>
				<div className={styles.hero_image}>
					<Image
						src="/images/background-camera.png"
						alt="hero"
						fill
						sizes="100vw"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
