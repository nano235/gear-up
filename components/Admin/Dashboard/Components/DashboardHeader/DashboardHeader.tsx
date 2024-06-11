import React from 'react'
import styles from './DashboardHeader.module.scss'
import { Button } from '@/shared'

const DashboardHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__left}>
                <h2 className={styles.container__left__welcome}>Goodmorning Einstein👋🏾</h2>
                <p className={styles.container__left__question}>What are you doing today?</p>
            </div>
            <div>
                <Button iconPrefix='/svgs/add.svg'>
                    Create a Listing
                </Button>
            </div>
        </div>
    )
}

export default DashboardHeader