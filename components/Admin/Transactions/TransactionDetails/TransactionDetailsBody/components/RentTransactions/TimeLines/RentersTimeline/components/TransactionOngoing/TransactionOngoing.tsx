import React from 'react'
import styles from './TransactionOngoing.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import Image from 'next/image'
import { Button } from '@/shared'

interface Props {
    handleNext: () => void
}

const TransactionOngoing = ({ handleNext }: Props) => {
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
                        You’ll be requested to confirm this transaction as complete once you’ve returned the gear.
                    </p>
                </div>
                <div className={styles.warning_container}>
                    <Image src='/svgs/warningIcon.svg' className={styles.warning_icon} alt='warning' width={10} height={10} />
                    <p className={styles.warning}>
                        Gearup Global Insurance coverage starts from 17:00 the day before the shoot and ends at 10:00 the day after the shoot. Failure to report may affect your liability and the resolution process. Your immediate action is crucial for a swift and fair resolution
                    </p>
                </div>
            </div>
            <div className={styles.btn_container}>
                <Button onClick={handleNext}>Initiate return</Button>
            </div>
        </div>
    )
}

export default TransactionOngoing