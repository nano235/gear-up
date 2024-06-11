"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { SearchBox } from "@/shared";
import { useGlobalContext } from "@/contexts/AppContext";

const words = ["Gears", "Studio Spaces"];
const Hero = () => {
	const { setHeroHeight }: any = useGlobalContext();
	const heroRef: any = useRef(null);
	const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

	useEffect(() => {
		const animateNextWord = () => {
			const wordElement = document.getElementById("animated-word");

			gsap.to(wordElement, {
				duration: 1,
				y: "-100%",
				ease: "ease.out",
				onComplete: () => {
					setCurrentWordIndex(prevIndex =>
						prevIndex === words.length - 1 ? 0 : prevIndex + 1
					);
					gsap.to(wordElement, { duration: 1, y: "0%", ease: "ease.out" });
				},
			});
		};

		const intervalId = setInterval(animateNextWord, 3000);

		return () => clearInterval(intervalId);
	}, [currentWordIndex]);
	useEffect(() => {
		const heroHeight = heroRef.current?.offsetHeight;
		setHeroHeight(heroHeight);
	}, []);
	return (
		<div className={styles.hero} ref={heroRef}>
			<div className={styles.center}>
				<div className={styles.text}>
					<h1>
						The Marketplace For African Creators to Rent, Buy & Sell{" "}
						<span id="animated-word">{words[currentWordIndex]}</span>
					</h1>
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
