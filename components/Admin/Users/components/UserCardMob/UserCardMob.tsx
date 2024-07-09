'use client'
import React, { useState } from 'react'
import styles from './UserCardMob.module.scss'
import Image from 'next/image'
import { Button } from '@/shared'
import Link from 'next/link'

interface Props {
    item: any
    url: string;
}
const UserCardMob = ({ item, url }: Props) => {
    const [showDetails, setShowDetails] = React.useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__left}>
                    <div className={styles.avatar}>
                        <Image src="/images/admin-img.jpg" alt={item.title} width={16} height={16} />
                    </div>
                    <div className={styles.container__header__left__name_amount}>
                        <p className={styles.name}>{item.username}</p>
                        <p className={styles.amount}>{item.email}</p>
                    </div>
                </div>
                <span className={styles.container__header__icon} data-rotate={showDetails} onClick={() => setShowDetails((prev) => !prev)}>
                    <Image src={'/svgs/chevron.svg'} alt={item.title} width={16} height={16} />
                </span>
            </div>
            {
                showDetails && (
                    <div className={styles.container__details}>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Joined date</p>
                            <p className={styles.value}>{item.joined_date}</p>
                        </div>
                        {/* <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Type</p>
                            <p className={`${styles.value} ${styles.rental}`}>{item.type}</p>
                        </div> */}
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Account Status</p>
                            <p className={`${styles.value} ${styles.status}`} data-status={item.account_status?.toLowerCase()}>{item.account_status}</p>
                        </div>
                        <div className={styles.container__details__btn_container}>
                            <Link href={`/admin/${url}/${item.id}`} className={styles.container__action_btn}>
                                <Button buttonType='secondary' className={styles.btn}>
                                    see details
                                </Button>
                            </Link>


                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserCardMob