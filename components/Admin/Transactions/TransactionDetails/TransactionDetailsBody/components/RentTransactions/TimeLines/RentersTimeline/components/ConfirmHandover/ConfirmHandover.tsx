import React from 'react'
import styles from './ConfirmHandover.module.scss'
import { Button } from '@/shared'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
interface Props {
    handleNext: () => void
}
const ConfirmHandover = ({ handleNext }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_top}>
                <HeaderSubText title="Confirm handover" />

                <div className={styles.details_container}>
                    <p className={styles.details}>
                        Please make sure you have received the gear from the lender and in good condition before confirming handover
                    </p>
                </div>
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        Shipping can be made either in person (local pick-up) or shipped to an address agreed upon by you and the lender
                    </p>
                </div>
                <div className={styles.details_container}>
                    <p className={styles.details}>
                        After you’ve confirmed handover, the transaction will be initiated
                    </p>
                </div>
            </div>
            <div className={styles.btn_container}>
                <Button onClick={handleNext}>Confirm handover</Button>
            </div>
        </div>
    )
}

export default ConfirmHandover