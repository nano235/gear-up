import React from 'react'
import HeaderSubText from '../HeaderSubText/HeaderSubText'
import styles from './Wallet.module.scss'
import { Button } from '@/shared'
import { CustomWalletIcon, SettingsNavIcon, TransactionNavIcon, WithdrawIcon } from '@/shared/svgs/dashboard'
import { DashboardCard } from '../Dashboard/Components'
import Image from 'next/image'
const cardsList = [
  {
    id: 1,
    title: 'Balance',
    icon: '/svgs/active-icon.svg',
    amount: 0,
    icon_color: "#FFB30F",
    bg: "#FDF8EC",
    subBg: "#FAEDD1"
  },
  {
    id: 2,
    title: 'Past 7 days',
    icon: '/svgs/ongoing-icon.svg',
    amount: 0,
    icon_color: "#0505B3",
    bg: "#ECECFD",
    subBg: "#ECECFD"
  },
  {
    id: 3,
    title: 'Past 30 days',
    icon: '/svgs/completed-icon.svg',
    amount: 0,
    icon_color: "#05B354",
    bg: "#ECFDF4",
    subBg: "#D1FAE3"
  },
  {
    id: 4,
    title: 'Total earnings',
    icon: '/svgs/decline-icon.svg',
    amount: 0,
    icon_color: "#FFB30F",
    bg: "#FDF8EC",
    subBg: "#FAEDD1"
  }
]

const Wallet = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <HeaderSubText title='Payouts' variant='main' />

        <div className={styles.btn_container}>
          <Button buttonType='secondary' className={`${styles.transparent_btn} ${styles.btn}`}>
            <span className={styles.icon}><SettingsNavIcon /> </span>Settings</Button>
          <Button buttonType='primary' className={styles.btn}>
            <span className={styles.icon}><WithdrawIcon /></span>
            Withdraw</Button>
        </div>
      </div>
      <div>
        <ul className={styles.container__cards_container}>
          {
            cardsList.map((card) => (
              <DashboardCard key={card.id} >
                <div className={styles.container__cards_container__item}>
                  <div className={styles.container__cards_container__item__left}>
                    <span className={styles.icon_container} data-id={card.id}>
                      <CustomWalletIcon color={card.icon_color} bg={card.subBg} subBg={card.bg}/>
                    </span>
                    <div>
                      <p className={styles.title}>{card.title}</p>
                      <p className={styles.amount}>${card.amount.toFixed(2)}</p>
                    </div>
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

export default Wallet