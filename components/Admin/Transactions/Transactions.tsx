import React from 'react'
import styles from './Transactions.module.scss'
import TransactionFilters from './components/TransactionFilters/TransactionFilters'
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Transactions</h1>
      <TransactionFilters />
    </div>
  )
}

export default Transactions