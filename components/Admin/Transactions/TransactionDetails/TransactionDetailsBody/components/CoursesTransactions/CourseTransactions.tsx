'use client'
import React, { useState } from 'react'
import styles from './CourseTransactions.module.scss'
import { Completed, Live, Pending } from './components'
import { ChevronIcon, CopyIcon, LocationEllipse, VerifyIcon } from '@/shared/svgs/dashboard'
import { Button } from '@/shared'
import { PersonalDetails, ReceiptDetails } from '../DetailsSummary/components'

interface Props {
  item?: any
}

const CourseTransactions = ({ item }: Props) => {
  console.log(item, 'item')
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div className={styles.container__left__summary_container}>
          <h3 className={styles.title}>Summary</h3>
          <div className={styles.summary_item}>
            <h4>Transaction type</h4>
            <p>Ebook course</p>
          </div>
          <div className={styles.summary_item}>
            <h4>Transaction date</h4>
            <p>15 Dec, 2023</p>
          </div>
          <div className={styles.summary_item}>
            <h4>Transaction ID</h4>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p>0000045847378283543</p>
              <span className={styles.icon}>
                <CopyIcon />
              </span>
            </span>
          </div>
        </div>
        {
          item?.transaction_status === 'completed' && <Completed />
        }
        {
          item?.transaction_status === 'requested' && <Pending />
        }
      </div>
      <div className={styles.container__right}>
        <PersonalDetails name='Wade Warren' subText='Tutor' profileLink='/admin/settings/profile'/>
        <ReceiptDetails />
      </div>
    </div>
  )
}

export default CourseTransactions