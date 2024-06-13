import React from 'react'
import styles from './TransactionDetailsBody.module.scss'
import DetailsTimeline from './components/DetailsTimeline/DetailsTimeline'
import DetailsSummary from './components/DetailsSummary/DetailsSummary'
import { useSearchParams } from 'next/navigation'
import { saleBuyersTimeline, saleSellersTimeline, rentLendersTimeLine, rentRentersTimeline } from './components/utils/data'
import RentTransactions from './components/RentTransactions/RentTransactions'
import BuyTransactions from './components/BuyTransactions/BuyTransactions'
import CourseTransactions from './components/CoursesTransactions/CourseTransactions'
interface Props {
    item: any
}
const TransactionDetailsBody = ({ item }: Props) => {
    const search = useSearchParams()
    const transactionType = search.get('transaction_type')
    return (
        <div className={styles.container}>
            {
                transactionType === 'rent' && <RentTransactions item={item} />
            }
            {
                transactionType === 'sale' && <BuyTransactions item={item}/>
            }
            {
                transactionType === 'courses' && <CourseTransactions item={item}/>
            }
        </div>
    )
}

export default TransactionDetailsBody