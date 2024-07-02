'use client'
import React, { useState } from 'react'
import styles from './ThirdPartyCheck.module.scss'
import { TransactionsTable } from './components'
const filters = [
    {
        id: 1,
        name: 'Pending'
    },
    {
        id: 2,
        name: 'Ongoing'
    },
    {
        id: 3,
        name: 'Verified'
    }
]
const ThirdPartyCheck = () => {
    const [activeFilterId, setActiveFilterId] = useState(1)
    return (
        <div className={styles.container}>
            <div className={styles.container__download_filter}>
                <ul className={styles.parent_container}>
                    {
                        filters.map((filter) => (
                            <li data-active={filter.id === activeFilterId} onClick={() => {
                                setActiveFilterId(filter.id)
                            }} key={filter.id} className={styles.filter}>
                                <p>{filter.name}</p>
                            </li>
                        ))
                    }
                </ul>
                <span className={styles.container__download_filter__download_btn}>
                    Download all as SVG
                </span>
            </div>
            <TransactionsTable transactionType={"buy"} />
        </div>
    )
}

export default ThirdPartyCheck