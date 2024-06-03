'use client';
import React from 'react'
import styles from './RecentDeals.module.scss'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Image from 'next/image';
import { InputField } from '@/shared';

const RecentDeals = () => {
    const rows: GridRowsProp = [
        { id: 1, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: "" },
        { id: 2, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Awaiting approval', actions: 'View', image: "" },
        { id: 3, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: "" },
        { id: 4, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Ongoing', actions: 'View', image: "" },
        { id: 5, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: "" },
        { id: 6, name: 'Canon EOS R5 Camera Kit', amount: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: "" },

    ];

    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', minWidth: 250, renderCell: ({ value }) => (
                <div className={styles.container__name_container}>
                    <Image src="/images/admin-img.jpg" alt={value} width={16} height={16} />
                    <p className={styles.container__name}>
                        {value}
                    </p>
                </div >
            )
        },
        { field: 'amount', headerName: 'Amount', minWidth: 200 },
        { field: 'transaction_date', headerName: 'Transaction Date', minWidth: 150 },
        { field: 'type', headerName: 'Type', minWidth: 150 },
        {
            field: 'status', headerName: 'Status', minWidth: 150, renderCell: ({ value }) => (
                <div className={styles.container__status_container}>
                    <p className={styles.container__status_container__status} data-status={value.toLowerCase()}>
                        {value}
                    </p>
                </div >
            )
        },
        { field: 'actions', headerName: 'Actions', minWidth: 150 },
    ];
    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}> RecentDeals</h2>
            <div className={styles.container__input_filter_container}>
                <InputField placeholder='Search' icon='/svgs/icon-search-dark.svg' iconTitle='search-icon' />
                <div className={styles.filter_icon_container}>
                    <Image src="/svgs/icon-filter.svg" alt="filter" width={16} height={16} />
                    <p>Filter</p>
                </div>
            </div>

            <div style={{ width: '100%' }} >
                <DataGrid rows={rows} columns={columns}
                    pagination={true} />
            </div>
        </div>
    )
}

export default RecentDeals