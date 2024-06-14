import React from 'react'
import styles from './AwaitingApproval.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'

interface Props {
    handleNext: () => void
}
const AwaitingApproval = ({ handleNext }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_top}>
                <HeaderSubText title="Awaiting confirmation" />
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        Awaiting the renter to confirm they’ve received the gear in a good condition
                    </p>
                </div>
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        After your client confirmed handover, the transaction will be initiated
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AwaitingApproval