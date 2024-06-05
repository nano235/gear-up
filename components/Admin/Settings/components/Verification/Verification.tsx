import React from 'react'
import styles from './Verification.module.scss'
import GetStarted from '@/components/Admin/GetStarted/GetStarted'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
const Verification = () => {
  return (
    <div className={styles.container}>
      <HeaderSubText title="Verification" description='We want to keep our community safe, you’ll need to complete the verification process to rent or rent out' />
      <GetStarted title='Let’s help you get verified'/>
    </div>
  )
}

export default Verification