'use client';
import React, { use, useState } from 'react'
import styles from './TransactionFilters.module.scss'
import { set } from 'lodash';

const TransactionFilters = () => {
    const [activeFilterId, setActiveFilterId] = useState(1)
    const [activeSubFilterId, setActiveSubFilterId] = useState(1)
    const parentFilters = [
        {
            id: 1,
            name: 'Rent',
            subFilters: [
                {
                    id: 1,
                    name: 'Requested'
                },
                {
                    id: 2,
                    name: 'Accepted/Ongoing'
                },
                {
                    id: 3,
                    name: 'Completed'
                },
                {
                    id: 4,
                    name: 'Canceled/declined'
                }
            ]
        },
        {
            id: 2,
            name: 'Buy',
            subFilters: [
                {
                    id: 1,
                    name: 'Requested'
                },
                {
                    id: 2,
                    name: 'Accepted/Ongoing'
                },
                {
                    id: 3,
                    name: 'Completed'
                },
                {
                    id: 4,
                    name: 'Canceled/declined'
                }
            ]
        },
        {
            id: 3,
            name: 'Courses',
            subFilters: [
                {
                    id: 1,
                    name: 'Ebooks'
                },
                {
                    id: 2,
                    name: 'Live'
                },
                {
                    id: 3,
                    name: 'Video'
                },
                {
                    id: 4,
                    name: 'Audio'
                }
            ]
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.container__filters}>
                <ul className={styles.container__filters__parent_container}>
                    {
                        parentFilters.map((filter) => (
                            <li data-active={filter.id === activeFilterId} onClick={() => {
                                setActiveFilterId(filter.id)
                                setActiveSubFilterId(0)
                            }} key={filter.id} className={styles.container__filters__parent_container__filter}>
                                <p>{filter.name}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul className={styles.container__filters__children_container}>
                    {
                        parentFilters.find((filter) => filter.id === activeFilterId)?.subFilters.map((subFilter) => (
                            <li onClick={() => setActiveSubFilterId(subFilter.id)} key={subFilter.id} className={styles.container__filters__children_container__filter} data-active={activeSubFilterId === subFilter.id}>
                                <p>{subFilter.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TransactionFilters