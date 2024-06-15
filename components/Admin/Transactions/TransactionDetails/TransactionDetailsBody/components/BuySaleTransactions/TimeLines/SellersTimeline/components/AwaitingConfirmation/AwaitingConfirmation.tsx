import React from 'react'
import styles from './AwaitingConfirmation.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'


const AwaitingConfirmation = () => {
  return (
    <div className={styles.container}>
      <HeaderSubText title="Awaiting Confirmation" />

      <div className={styles.details_container}>
        <p className={styles.details}>
          Awaiting confirmation from the buyer to confirm they’ve received the shipment in good condition</p>
      </div>
      <div className={styles.details_container}>
        <p className={styles.details}>
          Once your shipment has been confirmed by the buyer, the transaction will be completed
        </p>
      </div>
    </div>
  )
}

export default AwaitingConfirmation