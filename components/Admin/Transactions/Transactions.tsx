import React from 'react'
import styles from './Transactions.module.scss'
import { TransactionFilters, TransactionsTable } from './components'
import { Button } from '@/shared'
import HeaderSubText from '../HeaderSubText/HeaderSubText'


const Transactions = () => {
  return (
    <div className={styles.container}>
      <HeaderSubText title='Transactions' variant='main' />
      <div className={styles.container__download_filter}>
        <TransactionFilters />
        <span className={styles.container__download_filter__download_btn}>
          Download all as SVG
        </span>
      </div>
      <TransactionsTable />
    </div>
  )
}

export default Transactions