import { Logo } from "@/shared";
import { scrollTo } from "@/utils";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { footerNavLink, socialMediaLinks } from "@/mock";

const Footer = () => {
	const handleNavClick = (id: string) => {
		scrollTo({ id });
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_body}>
				<div className={`${styles.footer_logo} ${styles.footer_logo_noMob}`}>
					<Logo className={styles.footer_logo} />
					<div className={styles.text_container}>
						<p>
							Rent, buy and sell gears and studio spaces with ease within
							your country
						</p>
					</div>
				</div>
				<div className={styles.footer_navSection}>
					{footerNavLink.map((link: any, index: number) => (
						<div className={styles.footer_nav} key={index}>
							<div className={styles.footer_navTitle}>
								<h3>{link.label}</h3>
							</div>
							<nav className={styles.footer_navBody}>
								<ul>
									{link.links.map((menu: any, index: number) => (
										<li key={index}>
											{menu.external ? (
												<a
													href={menu.href}
													rel="noreferrer"
													target="_blank"
												>
													{menu.label}
												</a>
											) : (
												<Link href={menu.href}>{menu.label}</Link>
											)}
										</li>
									))}
								</ul>
							</nav>
						</div>
					))}
				</div>
			</div>
			<div className={styles.footer_footer}>
				<div className={styles.footer_copyWrite}>
					<p>&copy; 2024 Gearup. All rights reserved</p>
				</div>
				<div className={styles.footer_socials}>
					{socialMediaLinks.map((social: any, index: number) => (
						<a
							href={social.href}
							target="_blank"
							rel="noreferrer"
							className={styles.footer_social}
							key={index}
						>
							<Image
								src={social.icon}
								alt={social.label}
								fill
								sizes="100vw"
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
