'use client'
import React, { useState } from 'react'
import styles from './MembersCardMob.module.scss'
import Image from 'next/image'

interface Props {
    item: any
}
const MembersCardMob = ({ item }: Props) => {
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
                            <p className={styles.key}>Role</p>
                            <div className={styles.role_container}>
                                <p style={{ fontSize: '1.2rem' }} className={styles.role}>
                                    Customer service  <Image src='/svgs/filled-chevron.svg' height={10} width={10} alt='arrow' className={styles.icon} />
                                </p>
                            </div>
                        </div>
                        <div className={styles.container__details__detail_container}>
                            <p className={styles.key}>Action</p>
                            <div className={styles.actions_container}>
                                <p style={{ fontSize: '1.2rem' }} className={styles.action}>
                                    <Image src='/svgs/trash.svg' height={10} width={10} alt='arrow' className={styles.icon} />
                                    Remove
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MembersCardMob