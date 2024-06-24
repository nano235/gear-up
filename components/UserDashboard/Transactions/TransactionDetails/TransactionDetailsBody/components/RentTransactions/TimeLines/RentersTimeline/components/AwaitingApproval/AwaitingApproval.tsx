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
            <div className={styles.container_top}>
                <HeaderSubText title="Awaiting approval" />
                {
                    isCancelled ?

                        <div className={styles.details_container}>
                            <p className={styles.details}>
                                This transaction was declined, your money in escrow protection will be refunded to you
                            </p>
                        </div>
                        :
                        <>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    You have successfully paid the sum of $400 for the rental of Canon EOS R5 Camera from 23 Dec 2024 to 11 Jan 2024 (10 days) and the money is in escrow protection . </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Please make sure you review the renter agreement documents, overtime payment policies etc, before proceeding to this transaction. If you are not satisfied with the conditions, cancel the transaction and your money will be refunded to you      </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Once the lender accepts the transaction, the handover process will be initiated, and your client is expected to deliver the gear within 12-24hours to your shooting date else the money will be refunded to you
                                </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Gearup Global Insurance coverage starts from 17:00 the day before the shoot and ends at 10:00 the day after the shoot..  <Link href="#" className={styles.learn_more}>Learn more</Link>
                                </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    If the transaction is not approved by the lender, your money will be refunded to you.
                                </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    You have 12-24hours from when payment was made to cancel the transaction and request for a refund
                                </p>
                            </div>

                        </>
                }
            </div>
            {
                !isCancelled &&
                <div className={styles.btn_container}>
                    <Button className={styles.cancel_btn} onClick={() => setIsCancelled(true)} buttonType='secondary'>Cancel transaction</Button>
                    <Button onClick={handleNext}>Proceed</Button>
                </div>
            }
        </div>
    )
}

export default AwaitingApproval