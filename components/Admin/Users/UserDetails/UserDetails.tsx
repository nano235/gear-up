import React from 'react'
import styles from './UserDetails.module.scss'
import { About, DashboardUserHeader, Documents } from './components'
import { TransactionsView } from '@/views/AdminViews'
import ListingsView from '@/views/AdminViews/Listings'
import { ChevronIcon } from '@/shared/svgs/dashboard'
import Link from 'next/link'

const DashboardUserComponent = ({ slug }: { slug: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumbs}>
                <Link href={'/admin/dashboard'}>Dashboard</Link>
                <span className={styles.icon}>
                    <ChevronIcon />
                </span>
                <p>user</p>
            </div>
            <DashboardUserHeader />
            <About />
            <Documents />
            <TransactionsView />
            <ListingsView />
        </div>
    )
}

export default DashboardUserComponent