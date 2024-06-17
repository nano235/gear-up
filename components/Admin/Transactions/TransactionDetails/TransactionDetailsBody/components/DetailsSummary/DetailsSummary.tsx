'use client'
import React, { useState } from 'react'
import styles from './DetailsSummary.module.scss'
import {  CopyIcon } from '@/shared/svgs/dashboard'
import { PersonalDetails, ReceiptDetails, WarningContainer } from './components'

const DetailsSummary = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container__summary_container}>
                <h3 className={styles.title}>Summary</h3>
                <div className={styles.summary_item}>
                    <h4>Received</h4>
                    <p>$0.0</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Funded( Escrow Protection)</h4>
                    <p>$400.0</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Durations(Days)</h4>
                    <p>10 days</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Rental price(4 days)</h4>
                    <p>$400.0</p>
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
            <PersonalDetails name='Wade Warren' subText='Lagos, Nigeria' profileLink='/admin/settings/profile' />
            <ReceiptDetails />
            <WarningContainer />
        </div>
    )
}

export default DetailsSummary