import React from "react";
import styles from "./Authentication.module.scss";
import { Button, Logo } from "@/shared";
import Image from "next/image";
import Link from "next/link";

const VerifiedView = () => {
	return (
		<section className={styles.section}>
			<Logo className={styles.logo} />
			<Logo className={styles.logo_mob} type="dark" />
			<div className={styles.container}>
				<div className={styles.image}>
					<Image src="/svgs/verified.svg" alt="" fill sizes="100vw" />
				</div>
				<div className={styles.text}>
					<h3>Welcome to Gearup!</h3>
					<p>Start renting, buying and selling gears and studio spaces 🎉</p>
				</div>
				<Button className={styles.button}>
					<Link href="/">Back to homepage</Link>
				</Button>
			</div>
		</section>
	);
};

export default VerifiedView;
