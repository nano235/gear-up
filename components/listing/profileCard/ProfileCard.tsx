"use client";

import React from "react";
import styles from "./ProfileCard.module.scss";
import Image from "next/image";
import { Button, Ratings } from "@/shared";

const ProfileCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.text}>
				<h3>LENDER&apos;S PROFILE</h3>
			</div>
			<div className={styles.row}>
				<div className={styles.small_row}>
					<div className={styles.avatar}>
						<Image
							src={"/svgs/avatar.svg"}
							alt={"props.user"}
							fill
							sizes="100vw"
						/>
					</div>
					<div className={styles.block}>
						<div
							className={styles.small_row}
							style={{ marginBottom: "1rem" }}
						>
							<div className={styles.text} style={{ marginBottom: 0 }}>
								<h3>{"Wade Warren"}</h3>
							</div>
							<div className={styles.verified}>
								<Image
									src="/svgs/icon-verify.svg"
									alt=""
									fill
									sizes="100vw"
								/>
							</div>
						</div>
						<div className={styles.text} style={{ marginBottom: 0 }}>
							<p>Lagos, Nigeria</p>
						</div>
						<Ratings rating={0} showRatingNumber readOnly />
						<div className={styles.text} style={{ marginBottom: 0 }}>
							<p>50 deals</p>
						</div>
					</div>
				</div>
				<Button className={styles.button} buttonType="transparent">
					<div className={styles.icon}>
						<Image src="/svgs/send.svg" alt="" fill sizes="100vw" />
					</div>
					<h5>Send a message</h5>
				</Button>
			</div>
			<div className={styles.text}>
				<p>
					The Hollyland Solidcom C1-6S Intercoms 6x is a cutting-edge
					communication solution designed for seamless and crystal-clear
					communication in professional settings. With a compact and robust
					design, this intercom system provides reliable, wireless communication
					for up to six
				</p>
			</div>
		</div>
	);
};

export default ProfileCard;
