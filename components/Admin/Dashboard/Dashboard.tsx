import React from 'react'
import styles from './Dashboard.module.scss'
import { CardsSection, PendingListing, RecentDeals } from './Components'


const Dashboard = () => {
  return (
    <div className={styles.container}>
      <PendingListing />
      <CardsSection />
      <RecentDeals />
    </div>
  )
}

export default Dashboard