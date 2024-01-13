"use client";

import { navLinks } from "@/mock";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Logo, Button, CustomLink } from "@/shared";
import styles from "./Header.module.scss";
import { scrollTo } from "@/utils";
import Image from "next/image";
import { NavLink, NavLinkMenu, NavLinkSub } from "@/interfaces";

const Header = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	return (
		<header className={styles.header}>
			<Link href="/">
				<div className={styles.header_logoContainer}>
					<Logo />
				</div>
			</Link>
			<div
				className={
					styles[!collapsed ? "header_wrapper" : "header_wrapper__collapsed"]
				}
			>
				<nav className={styles.header_nav}>
					<ul className={styles.header_navList}>
						{navLinks.map((link: NavLink, index: number) => {
							return (
								<li
									key={index}
									className={`${styles.header_navLink} ${link.label}`}
								>
									{external ? (
										<a
											href={link.href}
											rel="noreferrer"
											target="_blank"
										>
											{link.label}
										</a>
									) : (
										<Link href={link.href}>{link.label}</Link>
									)}
									{link.subMenu && (
										<div className={styles.subMenu_container}>
											<div className={styles.subMenu}>
												{link.subMenu.map(
													(
														subMenu: NavLinkSub,
														index: number
													) => (
														<ul
															className={
																styles.subMenu_navlist
															}
															key={index}
														>
															{link.title && (
																<h1>{link.title}</h1>
															)}
															<h2>{subMenu.label}</h2>
															{subMenu.menu.map(
																(
																	menu: NavLinkMenu,
																	index: number
																) => (
																	<li
																		key={index}
																		className={
																			styles.subMenu_link
																		}
																	>
																		{menu.icon && (
																			<div
																				className={
																					styles.subMenu_icon
																				}
																			>
																				<Image
																					src={
																						menu.icon
																					}
																					fill
																					alt="youtube"
																					sizes="100vw"
																				/>
																			</div>
																		)}
																		<p>
																			{menu.label}
																		</p>
																	</li>
																)
															)}
														</ul>
													)
												)}
												<div className={styles.youtube_banner}>
													<Image
														src="/svgs/youtube-banner.svg"
														fill
														alt="youtube"
														sizes="100vw"
													/>
												</div>
											</div>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</nav>
				<div className={styles.button_container}>
					<Button>
						<Link href={"/sign-up"}>Sign Up</Link>
					</Button>
				</div>
			</div>
			<div
				onClick={() => setCollapsed(!collapsed)}
				className={
					styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
				}
			>
				<span className={styles.header_hamburgerBar}></span>
				<span className={styles.header_hamburgerBar}></span>
			</div>
		</header>
	);
};

export default Header;
