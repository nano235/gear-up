'use client'
import React, { useState } from 'react'
import styles from './RecentDealsCard.module.scss'
import { DashboardCard } from '../../..'
import Image from 'next/image'
import { Button } from '@/shared'

interface Props {
    item: any
}
const RecentDealsCard = ({ item }: Props) => {
    const [showDetails, setShowDetails] = React.useState<boolean>(false)
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__left}>
                    <div className={styles.avatar}>
                        <Image src="/images/admin-img.jpg" alt={item.title} width={16} height={16} />
                    </div>
                    <div className={styles.container__header__left__name_amount}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.amount}>{item.amount}</p>
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
                            <p className={styles.key}>Transaction date</p>
                            <p className={styles.value}>{item.transaction_date}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Type</p>
                            <p className={`${styles.value} ${styles.rental}`}>{item.type}</p>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Status</p>
                            <p className={`${styles.value} ${styles.status}`} data-status={item.status.toLowerCase()}>{item.status}</p>
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

export default RecentDealsCard