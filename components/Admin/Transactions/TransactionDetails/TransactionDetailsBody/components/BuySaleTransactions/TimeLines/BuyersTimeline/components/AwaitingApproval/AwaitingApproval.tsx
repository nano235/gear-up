'use client'
import React, { useState } from 'react'
import styles from './AwaitingApproval.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import Link from 'next/link'
import { Button } from '@/shared'

interface Props {
  handleNext: () => void
}
const AwaitingApproval = ({ handleNext }: Props) => {
  const [isCancelled, setIsCancelled] = useState(false)
  return (
    <div className={styles.container}>
      <HeaderSubText title="Awaiting approval" />

      <div className={styles.details_container}>
        <p className={styles.details}>
          You have successfully paid the sum of <span className={styles.bold}>$400</span> for the purchase of Canon EOS R5 Camera and the money is in escrow protection .</p>
      </div>
      <div className={styles.details_container}>
        <p className={styles.details}>
          Once the seller accepts the transaction, the shipment process will be initiated, and your client is expected to deliver the gear to you within 48 hours else the money will be refunded to you</p>
      </div>
      <div className={styles.details_container}>
        <p className={styles.details}>
          If the transaction is not approved by the seller, your money will be refunded to you.
        </p>
      </div>
      <div className={styles.details_container}>
        <p className={styles.details}>
          According to our <span className={styles.policy_text}>48hours return policy</span>, you have until 48 hours to initiate a return request if a fault(s) is identified with the equipment.d to you.
        </p>
      </div>
      <Button onClick={handleNext}>Proceed</Button>
    </div>
  )
}

export default AwaitingApproval