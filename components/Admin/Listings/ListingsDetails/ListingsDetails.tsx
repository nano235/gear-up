import React from 'react'
import styles from './ListingsDetails.module.scss'
import { BackNavigation, Button } from '@/shared'
import { HeaderSubText } from '@/components/UserDashboard'
import { ImageSlider } from '@/components/listing'
import PersonalDetails from '../../Transactions/TransactionDetails/TransactionDetailsBody/components/PersonalDetails/PersonalDetails'
import BuyRentListing from './components/BuyRentListing/BuyRentListing'
const ListingsDetails = () => {
    return (
        <div className={styles.container}>
            <BackNavigation />
            <div className={styles.header_container}>
                <HeaderSubText title='Review listing' variant='main' />
                <div className={styles.btn_container}>
                    <Button className={styles.decline_btn}>Decline</Button>
                    <Button className={styles.accept_btn}>Approve</Button>
                </div>
                <main className={styles.main_container}>
                    <BuyRentListing />
                    <div className={styles.right_container}>
                        <PersonalDetails profileLink='/settings?q=profile' title='Merchant' name='Wade Warren' subText='Lagos, Nigeria' />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListingsDetails