import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { AdminNavbar, AdminSidebar } from "@/components/Admin";

export const metadata: Metadata = {
    title: "Welcome to Gear Up",
    description: "Marketplace to get everything gears",
};

export default function VerficationLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <aside>{children}</aside>
        </main>
    )
}
