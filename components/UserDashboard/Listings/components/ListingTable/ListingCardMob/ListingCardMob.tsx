'use client'
import React from 'react'
import styles from './ListingCardMob.module.scss'
import Image from 'next/image'
import { Button, MobileCard, ToggleSwitch } from '@/shared'

interface Props {
    item: any
    ind?: number
    lastEle?: boolean
    activeFilter?: string
}

const ListingCardMob = ({ item, ind, lastEle, activeFilter }: Props) => {

    return (
        <MobileCard
            mainHeaderImage='/images/admin-img.jpg'
            mainHeaderText={item.title}
            subHeaderText={activeFilter !== 'courses' ? item.price : ""}
            lastEle={lastEle}
            ind={ind}

        >

            {
                activeFilter === 'courses' ?

                    <>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Price</p>
                            <p className={styles.value}>{item.price}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Sold</p>
                            <p className={`${styles.value}`}>{item.sold_count}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Revenue</p>
                            <p className={`${styles.value}`}>{item.revenue}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Status</p>
                            <p className={`${styles.value} ${styles.courses_status}`}>{item.status}</p>
                        </div>
                        <div className={styles.container__details__btn_container}>
                            <Button buttonType='secondary' className={styles.btn}>
                                see details
                            </Button>
                        </div>

                        <p className={`${styles.courses_action_icons}`}>
                            <span>
                                <Image src={'/svgs/share.svg'} alt={item.title} width={16} height={16} />
                                Share
                            </span>
                            <span>
                                <Image src={'/svgs/edit.svg'} alt={item.title} width={16} height={16} />
                                Edit
                            </span>
                            <span className={styles.delete}>
                                <Image src={'/svgs/red-trash.svg'} alt={item.title} width={16} height={16} />
                                Delete
                            </span>
                        </p>

                    </>
                    :
                    <>
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
                    </>
            }
        </MobileCard>
    )
}

export default ListingCardMob