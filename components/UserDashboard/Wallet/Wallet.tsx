'use client'
import React, { useState } from 'react'
import HeaderSubText from '../HeaderSubText/HeaderSubText'
import styles from './Wallet.module.scss'
import { Button, InputField } from '@/shared'
import { CustomWalletIcon, SettingsNavIcon, TransactionNavIcon, WithdrawIcon } from '@/shared/svgs/dashboard'
import { DashboardCard } from '../Dashboard/Components'
import Image from 'next/image'
import { ConfirmWithdrawalModal, WalletTransactionsTable, WalletWithdrawalModal, XlmDepositModal, XlmWithdrawalModal, WalletDepositModal } from './components'
import AlertModal from './components/AlertModal/AlertModal'
import { GridAddIcon } from '@mui/x-data-grid'
import XlmTransactionsTable from './components/XlmTransactionTable/XlmTransactionTable'


const Wallet = () => {
  const [isWithdrawal, setIsWithdrawal] = useState(false)
  const [confirmWithdrawal, setConfirmWithdrawal] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [showXlmDepositModal, setShowXlmDepositModal] = useState(false)
  const [showXlmWithdrawalModal, setShowXlmWithdrawalModal] = useState(false)
  const [showWalletDepositModal, setShowWalletDepositModal] = useState(false)
  const [showWalletWithdrawalModal, setShowWalletWithdrawalModal] = useState(false)


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
      <div className={styles.fiat_wallet}>
        <div className={styles.container__header}>
          <HeaderSubText title='Wallet' variant='normal' />
          <div className={styles.btn_container}>
            <Button onClick={() => setShowWalletDepositModal(true)} buttonType='primary' className={` ${styles.btn}`}>
              <GridAddIcon className={styles.icon} />Deposit</Button>
            <Button onClick={() => setShowWalletWithdrawalModal(true)} buttonType='primary' className={`${styles.btn} ${styles.withdraw_btn}`}>
              <span className={styles.icon}><WithdrawIcon color='#FFB30F' /></span>
              Withdraw</Button>
            <Button buttonType='secondary' className={`${styles.transparent_btn} ${styles.btn}`}>
              <span className={styles.icon}><SettingsNavIcon /> </span>Settings</Button>
          </div>
        </div>

        <div className={styles.account_balance_container}>
          <p>Wallet balance</p>
          <h2>$200.00</h2>
        </div>
        <div className={styles.table_section}>
          <HeaderSubText title='Transaction History' variant='normal' />
          <WalletTransactionsTable />
        </div>
      </div>
      <div className={styles.xlm_wallet}>
        <div className={styles.container__header}>
          <HeaderSubText title='XLM wallet' variant='normal' />
        </div>
        <div className={styles.account_balance_container}>
          <p>Wallet balance</p>
          <h2>$200.00</h2>
        </div>
        <div className={`${styles.btn_container} ${styles.xlm_btn}`}>
          <Button buttonType='primary' className={` ${styles.btn}`} onClick={() => setShowXlmDepositModal(true)} >
            <GridAddIcon className={styles.icon} />Deposit</Button>
          <Button onClick={() => setShowXlmWithdrawalModal(true)} buttonType='primary' className={`${styles.btn} ${styles.withdraw_btn}`}>
            <span className={styles.icon}><WithdrawIcon color='#FFB30F' /></span>
            Withdraw</Button>
        </div>
        <div className={styles.table_section}>
          <HeaderSubText title='Transaction History' variant='normal' />
          <XlmTransactionsTable />
        </div>
      </div>
      {
        showWalletWithdrawalModal &&
        <WalletWithdrawalModal openModal={showWalletWithdrawalModal} setOpenModal={setShowWalletWithdrawalModal} />
      }
      {
        confirmWithdrawal && <ConfirmWithdrawalModal openModal={confirmWithdrawal} setOpenModal={setConfirmWithdrawal} setShowAlertModal={setShowAlertModal} />
      }
      {
        showAlertModal && <AlertModal openModal={showAlertModal} setOpenModal={setShowAlertModal} />
      }
      {
        showXlmDepositModal && <XlmDepositModal openModal={showXlmDepositModal} setOpenModal={setShowXlmDepositModal} />
      }
      {
        showXlmWithdrawalModal && <XlmWithdrawalModal openModal={showXlmWithdrawalModal} setOpenModal={setShowXlmWithdrawalModal} />
      }
      {
        showWalletDepositModal && <WalletDepositModal openModal={showWalletDepositModal} setOpenModal={setShowWalletDepositModal} />
      }
    </div>
  )
}

export default Wallet