'use client';
import React from 'react'
import styles from './TransactionTable.module.scss'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Image from 'next/image';
import { InputField } from '@/shared';
import { MoreIcon } from '@/shared/svgs/dashboard';
import RecentDealsCard from '@/components/Admin/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard';

const TransactionTable = () => {

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
            field: 'name',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Name',
            minWidth: 250,
            renderCell: ({ value }) => (
                <div className={styles.container__name_container}>
                    <Image src="/images/admin-img.jpg" alt={value} width={16} height={16} />
                    <p className={styles.container__name} style={{ fontSize: '1.2rem' }}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            field: 'amount',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Amount',
            minWidth: 200,
        },
        {
            field: 'transaction_date',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Transaction Date',
            minWidth: 150,
        },
        {
            field: 'type',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Type',
            minWidth: 150,
        },
        {
            field: 'status',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Status',
            minWidth: 150,
            renderCell: ({ value }) => (
                <div className={styles.container__status_container}>
                    <p style={{ fontSize: '1.2rem' }} className={styles.container__status_container__status} data-status={value.toLowerCase()}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            field: 'id',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Actions',
            maxWidth: 100,
            renderCell: ({ value }) => (
                <span onClick={() => handleClickMore(value)} className={styles.container__status_container}>
                    <MoreIcon />
                </span>
            ),
        },
    ];

    const handleClickMore = (id: number) => {
        console.log('More clicked', id)
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__input_filter_container}>
                <InputField placeholder='Search' icon='/svgs/icon-search-dark.svg' iconTitle='search-icon' />
            </div>

            <div className={styles.container__table}>
                <DataGrid rows={rows} columns={columns}
                    hideFooterPagination={true} paginationMode="server"  sx={{
                        height: '100%',
                        width: '100%',
                        
                      }}
                      classes={{
                        overlay: styles.dataGridOverlay,
                    }}/>
            </div>

            <ul className={styles.container__cards_container}>
                {
                    rows.map((item) => (
                        <RecentDealsCard key={item.id} item={item} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TransactionTable