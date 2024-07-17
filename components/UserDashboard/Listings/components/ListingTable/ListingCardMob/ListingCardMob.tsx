'use client'
import React, { useState } from 'react'
import styles from './ListingCardMob.module.scss'
import Image from 'next/image'
import { Button, ToggleSwitch } from '@/shared'

interface Props {
    item: any
    ind?: number
    lastEle?: boolean
}

const ListingCardMob = ({ item, ind, lastEle }: Props) => {
    const [showDetails, setShowDetails] = React.useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div className={styles.container__header} data-index={ind} data-lastEle={lastEle && !showDetails}>
                <div className={styles.container__header__left}>
                    <div className={styles.avatar}>
                        <Image src="/images/admin-img.jpg" alt={item.title} width={16} height={16} />
                    </div>
                    <div className={styles.container__header__left__name_amount}>
                        <p className={styles.name}>{item.title}</p>
                        <p className={styles.amount}>{item.price}</p>
                    </div>
                </div>
                <span className={styles.container__header__icon} data-rotate={showDetails} onClick={() => setShowDetails((prev) => !prev)}>
                    <Image src={'/svgs/chevron.svg'} alt={item.title} width={16} height={16} />
                </span>
            </div>
            {
                showDetails && (
                    <div className={styles.container__details} data-lastEle={lastEle}>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Category</p>
                            <p className={styles.value}>{item.category}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Status</p>
                            <div className={styles.status_container}>
                                <ToggleSwitch checked={item.status?.toLowerCase() === "ongoing"} />
                                <p
                                    style={{ fontSize: "1.4rem" }}
                                    className={styles.container__status_container__status}
                                >
                                    {item.status?.toLowerCase() === "ongoing" ? "Live" : "Draft"}
                                </p>
                            </div>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Date</p>
                            <p className={`${styles.value}`}>{item.date}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Availability</p>
                            <p className={`${styles.value} ${styles.rental}`}>{item.availability}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Actions</p>
                            <p className={`${styles.value} ${styles.action_icons}`}>
                                <Image src={'/svgs/edit.svg'} alt={item.title} width={16} height={16} />
                                <Image src={'/svgs/red-trash.svg'} alt={item.title} width={16} height={16} />
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListingCardMob