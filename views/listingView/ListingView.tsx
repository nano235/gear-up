"use client";

import React from "react";
import styles from "./ListingView.module.scss";
import {
	ImageSlider,
	PriceContainer,
	SpecCard,
	DescriptionCard,
	Map,
	ProfileCard,
} from "@/components/listing";

const ListingView = () => {
	return (
		<section className={styles.section}>
			<div className={styles.row}>
				<div className={styles.large_block}>
					<ImageSlider />
					<div className={styles.block_mob}>
						<PriceContainer />
					</div>
					<SpecCard />
					<DescriptionCard
						description="The Hollyland Solidcom C1-6S Intercoms 6x is a cutting-edge
					communication solution designed for seamless and crystal-clear
					communication in professional settings. With a compact and robust
					design, this intercom system provides reliable, wireless communication
					for up to six users simultaneously. in film."
					/>
					<Map />
					<ProfileCard />
				</div>
				<div className={styles.block_desk}>
					<PriceContainer />
				</div>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.text}>
				<h1>Other Gears From the same lender</h1>
			</div>
			<div className={styles.row}></div>
		</section>
	);
};

export default ListingView;
