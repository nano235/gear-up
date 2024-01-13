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
							PSWAP offers you the power to transform your portfolio with
							ease. Whether it&apos;s whitelisted or non-whitelisted tokens,
							our swapping lets you trade in underperforming assets for
							valuable PSWAP tokens.
						</p>
					</div>
					<div className={styles.row}>
						<div className={styles.small_row}>
							<span>Read whitepaper</span>
							<div className={styles.small_icon}>
								<Image
									src={`/svgs/external-white.svg`}
									alt=""
									sizes="100vw"
									fill
								/>
							</div>
						</div>
						<div className={styles.small_row}>
							<span>Join our community</span>
							<div className={styles.small_icon}>
								<Image
									src={`/svgs/external-white.svg`}
									alt=""
									sizes="100vw"
									fill
								/>
							</div>
						</div>
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
			<div className={styles.footer_divider}></div>
			<div className={styles.footer_footer}>
				<div className={styles.footer_copyWrite}>
					<p>&copy; 2023 PSWAP. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
