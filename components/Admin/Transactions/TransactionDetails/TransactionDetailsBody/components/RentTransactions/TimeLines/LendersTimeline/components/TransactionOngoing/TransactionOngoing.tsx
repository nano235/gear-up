import React from 'react'
import styles from './TransactionOngoing.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
const TransactionOngoing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_top}>
                <HeaderSubText title="Transaction ongoing" />
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        Transaction is currently ongoing
                    </p>
                </div>
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        You’ll be requested to confirm this transaction as complete once your gear has been returned.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransactionOngoing