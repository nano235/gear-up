import React from 'react'
import styles from './BuySaleTransactions.module.scss'
import DetailsSummary from '../DetailsSummary/DetailsSummary'
import { BuyersTimeline, SellersTimeline } from './TimeLines'

interface Props {
    item?: any
}

const BuySaleTransactions = ({ item }: Props) => {
    const timeline = item?.user_role
    console.log(timeline)
    return (
        <div className={styles.container}>
            {
                timeline === 'buyer' ? <BuyersTimeline /> : <SellersTimeline />
            }
            <DetailsSummary />
        </div>
    )
}

export default BuySaleTransactions