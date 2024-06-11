import React from "react";
import styles from "./Authentication.module.scss";
import { Button, InputField, Logo } from "@/shared";
import Link from "next/link";

const ForgotPasswordView = () => {
	return (
		<section className={styles.section}>
			<Logo className={styles.logo} />
			<Logo className={styles.logo_mob} type="dark" />
			<div className={styles.container}>
				<div className={styles.text}>
					<h3>Forgot password</h3>
				</div>
				<InputField
					label="Email address"
					placeholder="Enter email address"
					className={styles.input}
				/>
				<Button className={styles.button}>Send verification code</Button>
				<div className={styles.text}>
					<p>
						Remembered your password?{" "}
						<Link href="/login" style={{ textDecoration: "none" }}>
							Login
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ForgotPasswordView;
