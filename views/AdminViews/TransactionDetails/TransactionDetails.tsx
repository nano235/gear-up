'use client'
import React, { useEffect } from 'react'
import styles from './TransactionDetails.module.scss'
import { TransactionDetailsBody, TransactionDetailsHeader } from '@/components/Admin/Transactions/TransactionDetails'
interface Props {
    slug: string
}

export const transactionRows = [
    {

        id: 1, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: ""
    },
    {

        id: 2, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Awaiting approval', actions: 'View', image: ""
    },
    {

        id: 3, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: ""
    },
    {

        id: 4, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Ongoing', actions: 'View', image: ""
    },
    {

        id: 5, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: ""
    },
    {

        id: 6, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: ""
    },

];
const TransactionDetails = ({ slug }: Props) => {
    const [item, setItem] = React.useState<any>()

    useEffect(() => {
        setItem(transactionRows.find((item) => item.id.toString() === slug))
    }, [slug])
    return (
        <div className={styles.container}>
            <TransactionDetailsHeader slug={slug} item={item} />
            <TransactionDetailsBody item={item}/>
        </div>
    )
}

export default TransactionDetails