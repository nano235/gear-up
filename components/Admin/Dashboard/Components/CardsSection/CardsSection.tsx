'use client';
import React, { useState } from 'react'
import styles from './CardsSection.module.scss'
import { InputField, Select } from '@/shared'
import { DashboardCard } from '..';
import Image from 'next/image';
import { ArrowUpIcon } from '@/shared/svgs/dashboard';
const CardsSection = () => {
    const [allTime, setAllTime] = useState<string>('12 Dec, 2023 - 14 Dec, 2023')

    const cardsList = [
        {
            id: 1,
            title: 'Active listing',
            icon: '/svgs/active-icon.svg',
            percentage: 0,
            amount: 0,
        },
        {
            id: 2,
            title: 'Ongoing deals',
            icon: '/svgs/ongoing-icon.svg',
            percentage: 0,
            amount: 0,
        },
        {
            id: 3,
            title: 'Completed deals',
            icon: '/svgs/completed-icon.svg',
            percentage: 0,
            amount: 0,
        },
        {
            id: 4,
            title: 'Declined deals',
            icon: '/svgs/decline-icon.svg',
            percentage: 0,
            amount: 0,
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.container__date_container}>
                <InputField type='date' placeholder='All time' className={styles.container__date_container__date_input} />
                <div className={styles.container__date_container__date_display}>
                    <p>{allTime}</p>
                </div>
            </div>
            <div>
                <ul className={styles.container__cards_container}>
                    {
                        cardsList.map((card) => (
                            <DashboardCard key={card.id} >
                                <div className={styles.container__cards_container__item}>
                                    <div className={styles.container__cards_container__item__left}>
                                        <Image src={card.icon} alt={card.title} width={16} height={16} />
                                        <div>
                                            <p className={styles.title}>{card.title}</p>
                                            <p className={styles.amount}>{card.amount}</p>
                                        </div>
                                    </div>
                                    <div className={styles.container__cards_container__item__right}>
                                        <p className={styles.percentage}><ArrowUpIcon />{card.percentage}%</p>
                                    </div>
                                </div>
                            </DashboardCard>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CardsSection