import React from 'react'
import styles from './Transactions.module.scss'
import { TransactionFilters, TransactionsTable } from './components'


const Transactions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}> Transactions</h1>
      <TransactionFilters />
      <TransactionsTable />
    </div>
  )
}

export default Transactions