import React from 'react'
import styles from './DetailsSummary.module.scss'
import { ChevronIcon, CopyIcon, LocationEllipse, VerifyIcon, WarningIcon } from '@/shared/svgs/dashboard'
import { Button } from '@/shared'

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
            <div className={styles.container__customer_container}>
                <h3 className={styles.title}>Customer</h3>
                <div className={styles.location_details}>
                    <span className={styles.location_icon}>
                        <LocationEllipse />
                    </span>
                    <div>
                        <h4>
                            Wade Warren
                        </h4>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <span className={styles.verfiy_icon}>
                        <VerifyIcon />
                    </span>
                </div>
                <div className={styles.btn_container}>
                    <Button buttonType='secondary' className={styles.btn}>View Profile</Button>
                </div>
            </div>
            <div className={styles.container__report_container}>
                <span className={`${styles.warning} ${styles.icon}`}>
                    <WarningIcon />
                </span>
                <div>
                    <h4>Report transaction</h4>
                    <p>report an issue with this transaction</p>
                </div>
                <span className={`${styles.chevron} ${styles.icon}`}>
                    <ChevronIcon />
                </span>
            </div>

        </div>
    )
}

export default DetailsSummary