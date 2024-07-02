"use client";

import React, { useState } from 'react';
import styles from './AdminNavbar.module.scss';
import { Button, Logo } from '@/shared';
import { ArrowDownIcon } from '@/shared/svgs/dashboard';
import Image from 'next/image';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { usePathname } from 'next/navigation';
import HeaderSubText from '../HeaderSubText/HeaderSubText';

const AdminNavbar = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const pathname = usePathname();
	const [showMenubar, setShowMenubar] = useState<boolean>(false);

	const newPathname = pathname.split('/')[2].replace(/-/g, ' ');


	return (
		<div className={styles.navbar_container}>
			<div className={styles.logo_icon}>
				<Logo type="dark" />
			</div>
			<HeaderSubText title={newPathname} variant="main" />
			<div className={styles.icons_container}>
				<div className={styles.mob_buttons}>
					<Button
						buttonType="transparent"
						className={`${styles.small_icon} ${styles.circle_border}`}
					>
						<Image
							src={"/svgs/icon-search-normal.svg"}
							height={70}
							width={70}
							alt=""
							sizes="100vw"
						/>
					</Button>
					<Button
						buttonType="transparent"
						className={`${styles.small_icon} ${styles.circle_border}`}
					>
						<Image
							src={"/svgs/icon-notification.svg"}
							height={70}
							width={70}
							alt=""
							sizes="100vw"
						/>
					</Button>
					<Button
						onClick={() => setShowMenubar(!showMenubar)}
						buttonType="transparent"
						className={styles.small_icon}
					>
						<Image
							src={
								!collapsed
									? "/svgs/icon-hamburger.svg"
									: "/svgs/icon-cart.svg"
							}
							height={70}
							width={70}
							alt=""
							sizes="100vw"
						/>
					</Button>
				</div>
			</div>
			<div className={styles.navbar_container__details}>
				<div className={styles.avatar}>
					<Image
						src="/images/admin-img.jpg"
						width={40}
						height={40}
						alt="avatar"
					/>
				</div>
				<span className={styles.name}>Waden Warren</span>
				<span>
					<ArrowDownIcon />
				</span>
			</div>

			{showMenubar && (
				<div className={styles.sidemenu_container}>
					<AdminSidebar
						isMobile={true}
						onClose={() => setShowMenubar(!showMenubar)}
					/>
				</div>
			)}
		</div>
	);
};

export default AdminNavbar;
