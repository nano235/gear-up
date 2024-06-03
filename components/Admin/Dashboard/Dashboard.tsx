import React from 'react'
import styles from './Dashboard.module.scss'
import { CardsSection, DashboardHeader, GetStarted, RecentDeals, TotalEarnings } from './Components'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <GetStarted />
      <CardsSection />
      <TotalEarnings/>
      <RecentDeals/>
    </div>
  )
}

export default Dashboard