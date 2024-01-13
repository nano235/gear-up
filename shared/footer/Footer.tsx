import { Logo } from "@/shared";
import { scrollTo } from "@/utils";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
	const handleNavClick = (id: string) => {
		scrollTo({ id });
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_body}>
				<div className={`${styles.footer_logo} ${styles.footer_logo_noMob}`}>
					<Logo type="footer" className={styles.footer_logo} />
					<div className={styles.text_container}>
						<p>
							Rent, buy and sell gears and studio spaces with ease within
							your country
						</p>
					</div>
				</div>
				<div className={styles.footer_navSection}>
					<div className={styles.footer_nav}>
						<div className={styles.footer_navTitle}>
							<h3>Company</h3>
						</div>
						<nav className={styles.footer_navBody}>
							<ul></ul>
						</nav>
					</div>
					<div className={styles.footer_nav}>
						<div className={styles.footer_navTitle}>
							<h3>Products</h3>
						</div>
						<nav className={styles.footer_navBody}>
							<ul></ul>
						</nav>
					</div>
					<div className={styles.footer_nav}>
						<div className={styles.footer_navTitle}>
							<h3>Support</h3>
						</div>
						<nav className={styles.footer_navBody}>
							<ul></ul>
						</nav>
					</div>
					<div className={styles.footer_nav}>
						<div className={styles.footer_navTitle}>
							<h3>Help</h3>
						</div>
						<nav className={styles.footer_navBody}>
							<ul></ul>
						</nav>
					</div>
				</div>
			</div>
			<div className={styles.footer_footer}>
				<div className={styles.footer_copyWrite}>
					<p>&copy; 2024 Gearup. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
