import React from 'react'
import styles from './Verification.module.scss'
import GetStarted from '@/components/Admin/GetStarted/GetStarted'
const Verification = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Verifications</h3>
      <p className={styles.description}>We want to keep our community safe, you’ll need to complete the verification process to rent or rent out</p>
      <GetStarted title='Let’s help you get verified'/>
    </div>
  )
}

export default Verification