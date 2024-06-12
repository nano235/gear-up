import React from 'react'
import styles from './TransactionDetailsBody.module.scss'
import DetailsTimeline from './components/DetailsTimeline/DetailsTimeline'
import DetailsSummary from './components/DetailsSummary/DetailsSummary'
interface Props {
    item: any
}
const TransactionDetailsBody = ({ item }: Props) => {
    return (
        <div className={styles.container}>
            <DetailsTimeline />
            <DetailsSummary />
        </div>
    )
}

export default TransactionDetailsBody