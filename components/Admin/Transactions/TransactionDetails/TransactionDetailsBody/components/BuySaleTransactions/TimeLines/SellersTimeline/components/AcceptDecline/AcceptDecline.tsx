'use client'
import React, { useState } from 'react'
import styles from './AcceptDecline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import Link from 'next/link'
import { Button } from '@/shared'

interface Props {
    handleNext: () => void
}
const AcceptDecline = ({ handleNext }: Props) => {
    const [isCancelled, setIsCancelled] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.container_top}>
                <HeaderSubText title="Awaiting approval" />
                {
                    isCancelled ?

                        <div className={styles.details_container}>
                            <p className={styles.details}>
                                You’ve declined this transaction and the fund in the escrow protection will be refunded to the buyer
                            </p>
                        </div>
                        :
                        <>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Wade Warren has successfully paid the sum of $400 for the purchase of Canon EOS R5 Camera, and the money is in escrow protection, which will be released to you once the transaction is completed </p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Buyers have the right to Return policy and the choice to opt for Third-Party Verification when making a purchase. Hence, we mandate that by accepting this transaction, you are agreeing to the 48-hour return policy</p>
                            </div>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    Your payment will be processed after the 48hours return period has elapsed, if the buyer did not initiate a return request
                                </p>
                            </div>

                        </>
                }
            </div>
            {
                !isCancelled &&
                <div className={styles.btn_container}>
                    <Button className={styles.cancel_btn} onClick={() => setIsCancelled(true)} buttonType='secondary'>Decline</Button>
                    <Button onClick={handleNext}>Accept</Button>
                </div>
            }
        </div>
    )
}

export default AcceptDecline