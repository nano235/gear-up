import type { Metadata } from "next";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
	title: "Welcome to Gear Up",
	description: "Marketplace to get everything gears",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <main className={styles.main}>{children}</main>;
}
