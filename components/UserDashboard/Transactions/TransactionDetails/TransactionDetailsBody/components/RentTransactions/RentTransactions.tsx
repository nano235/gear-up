import React from 'react'
import styles from './RentTransactions.module.scss'
import DetailsSummary from '../DetailsSummary/DetailsSummary'
import { rentLendersTimeLine, rentRentersTimeline } from '../utils/data'
import { LendersTimeline, RentersTimeline } from './TimeLines'

interface Props {
    item?: any
}

const RentTransactions = ({ item }: Props) => {
    const timeline = item?.user_role
    console.log(timeline)

    return (
        <div className={styles.container}>
            {
                timeline === 'lender' ? <LendersTimeline /> : <RentersTimeline />
            }
            <DetailsSummary />
        </div>
    )
}

export default RentTransactions