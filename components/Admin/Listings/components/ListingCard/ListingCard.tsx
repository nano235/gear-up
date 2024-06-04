"use client";

import React from "react";
import styles from "./ListingCard.module.scss";
import Image from "next/image";
import { formatLink, shortenTitle } from "@/utils";
import Link from "next/link";
import { useGlobalContext } from "@/contexts/AppContext";
import { EllipseIcon, MoreIcon } from "@/shared/svgs/dashboard";
import MoreModal from "../MoreModal/MoreModal";

interface Props {
    props: any;
    className?: string;
}

const ListingCard = ({ props, className }: Props) => {
    const { setSingleListing } = useGlobalContext();
    const [showMoreModal, setShowMoreModal] = React.useState(false);
    const handleMoreIconClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        console.log('More icon clicked');
        setShowMoreModal((prev) => !prev);
        // Add any additional logic for the MoreIcon click here
    };

    return (
        <div
            className={`${styles.container} ${className}`}
        >
            <div className={styles.image}>
                <Image src={props.image} alt={props.title} fill sizes="100vw" />
                <span className={styles.more_icon} onClick={handleMoreIconClick}>
                    <MoreIcon />
                </span>
                {
                    showMoreModal && <MoreModal />
                }
            </div>
            <div className={styles.row} style={{ alignItems: "flex-start" }}>
                <div className={styles.text}>
                    <h2>{shortenTitle(props.title, 50)}</h2>
                </div>
                <div className={styles.chevron}>
                    <EllipseIcon color="#FFB30F" />
                </div>
            </div>
            <div className={styles.pricing_container}>
                <div className={styles.pricing}>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
