import React from "react";
import styles from "./AdminNavbar.module.scss";
import { InputField } from "@/shared";
import { ArrowDownIcon, NotificationIcon } from "@/shared/svgs/dashboard";
import Image from "next/image";

const AdminNavbar = () => {
	return (
		<div className={styles.navbar_container}>
			<InputField
				placeholder="Try e.g Nikon SR ..."
				icon="/svgs/icon-search-dark.svg"
				iconTitle="search-icon"
			/>
			<div>
				<NotificationIcon />
			</div>
			<div className={styles.user_image}>
				<Image src="/images/user.png" alt="" fill />
			</div>
		</div>
	);
};

export default AdminNavbar;
