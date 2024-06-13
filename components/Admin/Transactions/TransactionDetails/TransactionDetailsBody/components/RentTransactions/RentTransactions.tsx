import React from 'react'
import DetailsTimeline from '../DetailsTimeline/DetailsTimeline'
import styles from './RecentTransactions.module.scss'
import DetailsSummary from '../DetailsSummary/DetailsSummary'
import { rentLendersTimeLine, rentRentersTimeline } from '../utils/data'

interface Props {
    item?: any
}

const RentTransactions = ({ item }: Props) => {
    const timeline = item?.user_transaction_type === 'lender'? rentLendersTimeLine : rentRentersTimeline
    console.log(timeline)
    return (
        <div className={styles.container}>
            <DetailsTimeline timelines={timeline} />
            <DetailsSummary />
        </div>
    )
}

export default RentTransactions