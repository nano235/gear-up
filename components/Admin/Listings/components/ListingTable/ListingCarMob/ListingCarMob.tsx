'use client'
import React, { useState } from 'react'
import styles from './//ListingCarMob.module.scss'
import Image from 'next/image'
import { Button } from '@/shared'

interface Props {
    item: any
}
const ListingCardMob = ({ item }: Props) => {
    const [showDetails, setShowDetails] = React.useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
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
                    <div className={styles.container__details}>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Category</p>
                            <p className={styles.value}>{item.category}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Date</p>
                            <p className={`${styles.value}`}>{item.date}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Status</p>
                            <p className={`${styles.value} ${styles.status}`} data-status={item.account_status?.toLowerCase()}>{item.status}</p>
                        </div>
                        <div className={styles.container__details__btn_container}>
                            <Button buttonType='secondary' className={styles.btn}>
                                see details
                            </Button>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListingCardMob