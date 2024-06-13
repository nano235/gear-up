'use client'
import React, { useState } from 'react'
import styles from './AcceptDecline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { Button } from '@/shared'
import Image from 'next/image'

interface Props {
    handleNext: () => void
}
const AcceptDecline = ({ handleNext }: Props) => {
    const [isCancelled, setIsCancelled] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.container_top}>
                <HeaderSubText title='Accept or decline transaction' />
                {
                    isCancelled ?

                        <div className={styles.details_container}>
                            <p className={styles.details}>
                                You’ve declined this transaction and the fund in the escrow protection will be refunded to the renter
                            </p>
                        </div>
                        :
                        <>
                            <div className={styles.details_container}>
                                <p className={styles.details}>
                                    <span className={styles.bold}>Wade Warren</span> has successfully paid the sum of <span className={styles.bold}>$400</span> for the rental of Canon EOS R5 Camera from <span className={styles.bold}>23 Dec 2024 to 11 Jan 2024 (10 days)</span>  and the money is in escrow protection which will be released to you once the transaction is completed
                                </p>
                            </div>
                            <div className={styles.warning_container}>
                                <Image src='/svgs/warningIcon.svg' className={styles.warning_icon} alt='warning' width={10} height={10} />
                                <p className={styles.warning}>
                                    Please make sure you communicate or tell the renter about all your relevant rental agreement documents, overtime payment policies etc, before accepting this transaction, and all document must be uploaded on the file messaging section for transparency
                                </p>
                            </div>
                        </>
                }
            </div>
            {
                !isCancelled &&
                <div className={styles.btn_container}>
                    <Button onClick={() => setIsCancelled(true)} className={styles.cancel_btn} buttonType='secondary'>Decline</Button>
                    <Button onClick={handleNext}>Accept</Button>
                </div>
            }
        </div>
    )
}

export default AcceptDecline