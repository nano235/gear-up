'use client'
import React, { useState } from 'react'
import HeaderSubText from '../HeaderSubText/HeaderSubText'
import styles from './Wallet.module.scss'
import { Button, InputField } from '@/shared'
import { CustomWalletIcon, SettingsNavIcon, TransactionNavIcon, WithdrawIcon } from '@/shared/svgs/dashboard'
import { DashboardCard } from '../Dashboard/Components'
import Image from 'next/image'
import { ConfirmWithdrawalModal, WalletTransactionsTable, WithdrawalModal } from './components'
import AlertModal from './components/AlertModal/AlertModal'
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
  const [isWithdrawal, setIsWithdrawal] = useState(false)
  const [confirmWithdrawal, setConfirmWithdrawal] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)


  const openModalHandler = () => {
    setIsWithdrawal(true)
  }

  const openConfirmModal = () => {
    setIsWithdrawal(true)
  }

  const closeWithdrawalModal = () => {
    setIsWithdrawal(false)
  }

  const closeConfirmModal = () => {
    setConfirmWithdrawal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <HeaderSubText title='Payouts' variant='normal' />
        <div className={styles.btn_container}>
          <Button buttonType='secondary' className={`${styles.transparent_btn} ${styles.btn}`}>
            <span className={styles.icon}><SettingsNavIcon /> </span>Settings</Button>
          <Button onClick={openModalHandler} buttonType='primary' className={styles.btn}>
            <span className={styles.icon}><WithdrawIcon /></span>
            Withdraw</Button>
        </div>
      </div>

      <ul className={styles.container__cards_container}>
        {
          cardsList.map((card) => (
            <DashboardCard key={card.id} >
              <div className={styles.container__cards_container__item}>
                <div className={styles.container__cards_container__item__left}>
                  <span className={styles.icon_container} data-id={card.id}>
                    <CustomWalletIcon color={card.icon_color} bg={card.subBg} subBg={card.bg} />
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
      <div className={styles.table_section}>
        <HeaderSubText title='Transaction History' variant='main' />
        <WalletTransactionsTable />
      </div>
      {
        isWithdrawal &&
        <WithdrawalModal setConfirmWithdrawal={setConfirmWithdrawal} isWithdrawal={isWithdrawal} setIsWithdrawal={closeWithdrawalModal} />
      }
      {
        confirmWithdrawal && <ConfirmWithdrawalModal openModal={confirmWithdrawal} setOpenModal={setConfirmWithdrawal} setShowAlertModal={setShowAlertModal}/>
      }
      {
        showAlertModal && <AlertModal openModal={showAlertModal} setOpenModal={setShowAlertModal} />
      }
    </div>
  )
}

export default Wallet