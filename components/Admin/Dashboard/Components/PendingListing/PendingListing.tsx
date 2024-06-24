import React from 'react'
import styles from './PendingListing.module.scss'
import { Button } from '@/shared'
import Image from 'next/image'

const PendingListing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__left}>
                <Image src='/svgs/pending-listing.svg' className={styles.image_icon} width={40} height={40} alt='Pending listing' />
                <div >
                    <h2 className={styles.container__left__welcome}>Pending listings</h2>
                    <p className={styles.container__left__question}>View all the listings awaiting approval</p>
                </div>
            </div>
            <div className={styles.create_listing}>
                <Button buttonType='secondary' iconSuffix='/svgs/arrow.svg'>
                    Review pending listings
                </Button>
            </div>
        </div>
    )
}

export default PendingListing