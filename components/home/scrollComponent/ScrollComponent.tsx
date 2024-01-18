"use client";

import React, { useState, useEffect, useRef } from "react";
import { eventEmitter } from "@/utils";
import styles from "./ScrollComponent.module.scss";
import { scrollData } from "@/mock";
import Image from "next/image";
import { Button } from "@/shared";
import Link from "next/link";

const ScrollComponent = () => {
	const ref = useRef<HTMLDivElement>(null);
	const barRef = useRef(null);
	const [active, setActive] = useState<number>(0);

	useEffect(() => {
		const switchTab = (direction: "forward" | "backward") => {
			const validateForward = direction === "forward" && active + 1 < 3;
			const validateBackward = direction === "backward" && active - 1 >= 0;

			validateForward && setActive(active + 1);
			validateBackward && setActive(active - 1);
		};

		const tabFront = () => {
			switchTab("forward");
		};

		const tabBack = () => {
			switchTab("backward");
		};

		const tabFirst = () => {
			setActive(0);
		};

		const tabLast = () => {
			setActive(2);
		};

		eventEmitter.once("switch-tab-forward", tabFront);
		eventEmitter.once("switch-tab-backward", tabBack);
		eventEmitter.once("switch-tab-first", tabFirst);
		eventEmitter.once("switch-tab-last", tabLast);

		return () => {
			eventEmitter.removeListener("switch-tab-forward", tabFront);
			eventEmitter.removeListener("switch-tab-backward", tabBack);
			eventEmitter.removeListener("switch-tab-first", tabFirst);
			eventEmitter.removeListener("switch-tab-last", tabLast);
		};
	}, [active]);
	return (
		<section
			className={styles.section}
			id="summary"
			data-nav-section="Summary"
			ref={ref}
			data-animation="summary"
		>
			<div className={styles.card} data-animation="card" data-active={active === 1}>
				<div className={styles.header}>
					<div className={styles.indicators}>
						{scrollData.map((item: any, index: number) => (
							<span className={styles.indicator} key={index}></span>
						))}
						<span
							ref={barRef}
							className={styles.indicator_active}
							style={{
								left: `${active * 35.333}%`,
							}}
						></span>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.image} data-animation="summary-image">
						<Image
							src={scrollData[active].image}
							alt={scrollData[active].title}
							fill
							sizes="100vw"
						/>
						<span className={styles.line}></span>
						<span className={styles.line}></span>
					</div>
					<div className={styles.details}>
						<div className={styles.alert_container} data-animation="alert">
							<div className={styles.icon}>
								<Image
									src={scrollData[active].icon}
									alt=""
									fill
									sizes="100vw"
								/>
							</div>
							<div className={styles.text}>
								<h3>{scrollData[active].alert}</h3>
							</div>
						</div>
						<div className={styles.text}>
							<h2 data-animation="title">{scrollData[active].title}</h2>
							<p data-animation="desc">{scrollData[active].description}</p>
						</div>
						<Link href={scrollData[active].url}>
							<Button
								buttonType="transparent"
								className={styles.button}
								data-animation="button"
							>
								{scrollData[active].button}
							</Button>
						</Link>
					</div>
				</div>
			</div>
			{scrollData.map((card: any, index: number) => (
				<div className={styles.mob_card} key={index} data-active={index === 1}>
					<div className={styles.body}>
						<div className={styles.image}>
							<Image src={card.image} alt={card.title} fill sizes="100vw" />
							<span className={styles.line}></span>
							<span className={styles.line}></span>
						</div>
						<div className={styles.details}>
							<div className={styles.alert_container}>
								<div className={styles.icon}>
									<Image src={card.icon} alt="" fill sizes="100vw" />
								</div>
								<div className={styles.text}>
									<h3>{card.alert}</h3>
								</div>
							</div>
							<div className={styles.text}>
								<h2>{card.title}</h2>
								<p>{card.description}</p>
							</div>
							<Link href={card.url}>
								<Button
									buttonType="transparent"
									className={styles.button}
								>
									{card.button}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default ScrollComponent;
