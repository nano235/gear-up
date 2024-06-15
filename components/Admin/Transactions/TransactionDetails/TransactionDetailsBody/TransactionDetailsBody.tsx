import React from 'react'
import styles from './TransactionDetailsBody.module.scss'
import { useSearchParams } from 'next/navigation'
import RentTransactions from './components/RentTransactions/RentTransactions'
import BuyTransactions from './components/BuySaleTransactions/BuySaleTransactions'
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
                transactionType === 'buy' && <BuyTransactions item={item}/>
            }
            {
                transactionType === 'courses' && <CourseTransactions item={item}/>
            }
        </div>
    )
}

export default TransactionDetailsBody