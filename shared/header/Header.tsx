"use client";

import { navLinks } from "@/mock";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Logo, Button } from "@/shared";
import styles from "./Header.module.scss";
import Image from "next/image";
import { NavLink, NavLinkMenu, NavLinkSub } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/AppContext";
import { AppState, useAppDispatch, useAppSelector } from "@/store/configureStore";
import { updateUser } from "@/store/slices/userSlice";
import { clearNewListing } from "@/store/slices/addListingSlice";

enum Scroll {
	Idle = "idle",
	InitialScroll = "initial",
	FinalScroll = "final",
}

const Header = () => {
	const { heroHeight, isLoggedIn }: any = useGlobalContext();
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [scroll, setScroll] = useState<Scroll>(Scroll.Idle);
	const headerRef: any = useRef(null);
	const user = useAppSelector((state: AppState) => state.user);
	const router = useRouter();
	const pathName = usePathname();
	const dispatch = useAppDispatch();
	const homePath = pathName === "/";
	useEffect(() => {
		const headerHeight: any = headerRef.current?.offsetHeight;
		dispatch(updateUser({ isAuthenticated: false }));
		dispatch(clearNewListing());
		const scrollCheck = () => {
			const currentScrollY = window.scrollY;

			if (homePath) {
				if (currentScrollY > headerHeight) {
					setScroll(Scroll.InitialScroll);
				}
				if (currentScrollY <= headerHeight) setScroll(Scroll.Idle);
				if (currentScrollY >= heroHeight) setScroll(Scroll.FinalScroll);
			}
		};
		if (!homePath) {
			setScroll(Scroll.FinalScroll);
		} else {
			setScroll(Scroll.Idle);
		}
		window.addEventListener("scroll", scrollCheck, { passive: true });

		return () => window.removeEventListener("scroll", scrollCheck);
	}, [heroHeight]);
	const handleLogoShown = () =>
		!collapsed || scroll === Scroll.FinalScroll ? "dark" : "light";

	return (
		<header
			className={styles.header}
			data-collapsed={!collapsed || scroll === Scroll.FinalScroll}
			ref={headerRef}
			data-scroll={scroll}
		>
			<Link href="/">
				<div className={styles.header_logoContainer}>
					<Logo type={handleLogoShown()} />
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
							// const [isActive, setIsActive] = useState<boolean>(false);
							return (
								<li
									key={index}
									className={styles.header_navLink}
									// onClick={() => setIsActive(!isActive)}
									// data-active={isActive}
								>
									{/* {link.external ? (
										<a
											href={link.href}
											rel="noreferrer"
											target="_blank"
										>
											{link.label}
										</a>
									) : (
										<Link href={link.href}>{link.label}</Link>
									)} */}
									<div className={styles.small_row}>
										<div className={styles.link_icon}>
											<Image
												src={link.icon}
												fill
												alt=""
												sizes="100vw"
											/>
										</div>
										<p>{link.label}</p>
									</div>
									{link.subMenu && (
										<div className={styles.mob_chevron}>
											<Image
												src="/svgs/chevron.svg"
												fill
												alt=""
												sizes="100vw"
											/>
										</div>
									)}
									{link.subMenu && (
										<div
											className={styles.subMenu_container}
											data-active={
												link.label === "sell gears" ||
												link.label === "rent out"
											}
										>
											<div className={styles.subMenu}>
												<div className={styles.container}>
													{link.title && (
														<div
															className={
																styles.subMenu_title
															}
														>
															<h1>{link.title}</h1>
															<p>{link.description}</p>
														</div>
													)}
													{link.button && (
														<Button
															className={styles.link_button}
															onClick={() =>
																router.push(link.href)
															}
														>
															<div
																className={
																	styles.icon_plus
																}
															>
																<Image
																	src="/svgs/icon-plus.svg"
																	alt=""
																	fill
																	sizes="100vw"
																/>
															</div>
															<p>{link.button}</p>
														</Button>
													)}
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
																						alt=""
																						sizes="100vw"
																					/>
																				</div>
																			)}
																			<p>
																				{
																					menu.label
																				}
																			</p>
																		</li>
																	)
																)}
															</ul>
														)
													)}
												</div>
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
					<Button buttonType="transparent" className={styles.small_icon}>
						<div>
							<Image
								src={
									scroll === Scroll.FinalScroll
										? "/svgs/icon-search-dark.svg"
										: "/svgs/icon-search.svg"
								}
								fill
								alt=""
								sizes="100vw"
							/>
						</div>
					</Button>
					<Button buttonType="transparent" className={styles.small_icon}>
						<div>
							<Image
								src={
									scroll === Scroll.FinalScroll
										? "/svgs/icon-cart-dark.svg"
										: "/svgs/icon-cart.svg"
								}
								fill
								alt=""
								sizes="100vw"
							/>
						</div>
					</Button>
					{user.isAuthenticated ? (
						<Link className={styles.user_image} href="/admin/dashboard">
							<Image src="/images/user.png" alt="" fill />
						</Link>
					) : (
						<>
							<Button
								buttonType="transparent"
								className={styles.trans_button}
							>
								<Link href={"/login"}>Login</Link>
							</Button>
							<Button className={styles.button}>
								<Link href={"/sign-up"}>Sign Up</Link>
							</Button>
						</>
					)}
				</div>
			</div>
			<div className={styles.mob_buttons}>
				<Button buttonType="transparent" className={styles.small_icon}>
					<div>
						<Image
							src={
								!collapsed || scroll === Scroll.FinalScroll
									? "/svgs/icon-search-dark.svg"
									: "/svgs/icon-search.svg"
							}
							fill
							alt=""
							sizes="100vw"
						/>
					</div>
				</Button>
				<Button buttonType="transparent" className={styles.small_icon}>
					<div>
						<Image
							src={
								!collapsed || scroll === Scroll.FinalScroll
									? "/svgs/icon-cart-dark.svg"
									: "/svgs/icon-cart.svg"
							}
							fill
							alt=""
							sizes="100vw"
						/>
					</div>
				</Button>
				<div
					onClick={() => setCollapsed(!collapsed)}
					className={
						styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
					}
				>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
