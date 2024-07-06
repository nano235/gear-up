'use client';
import React from 'react'
import styles from './RecentDeals.module.scss'
import { DataGrid, GridAddIcon, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Image from 'next/image';
import { Button, InputField } from '@/shared';
import RecentDealsCard from './components/RecentDealsCard/RecentDealsCard';
import { MoreIcon, TransactionNavIcon } from '@/shared/svgs/dashboard';
import { customisedTableClasses } from '@/utils/classes';
import Link from 'next/link';
const sharedColDef: GridColDef = {
    field: "",
    sortable: true,
    flex: 1,
};
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
            ...sharedColDef,
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
            ...sharedColDef,
            field: 'amount',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Amount',
            minWidth: 200,
        },
        {
            ...sharedColDef,
            field: 'transaction_date',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Transaction Date',
            minWidth: 150,
        },
        {
            ...sharedColDef,
            field: 'type',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Type',
            minWidth: 150,
        },
        {
            ...sharedColDef,
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
            ...sharedColDef,
            field: 'id',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Actions',
            headerAlign: 'center',
            align: 'center',
            minWidth: 150,
            renderCell: ({ value }) => (
                <Link href={`/user/transactions/${value}`} className={styles.container__action_btn} >
                    <Button>View details</Button>
                </Link>
            ),
        },
    ];

    const handleClickMore = (id: number) => {
        console.log('More clicked', id)
    };

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

            {
                rows.length < 1 ?
                    <div className={styles.empty_rows}>
                        <span className={styles.transaction_icon}>
                            <TransactionNavIcon color='#FFB30F' />
                        </span>
                        No data available

                        <span className={styles.add_btn}>
                            <GridAddIcon sx={{ height: '3rem', width: '3rem' }} />
                        </span>
                    </div>
                    :
                    <>
                        <div className={styles.container__table} style={{ width: '100%' }}>
                            <DataGrid rows={rows} columns={columns}
                                hideFooterPagination={true} hideFooter paginationMode="server"
                                sx={customisedTableClasses} autoHeight
                            />
                        </div>
                        <ul className={styles.container__cards_container}>
                            {
                                rows.map((item) => (
                                    <RecentDealsCard key={item.id} item={item} />
                                ))
                            }
                        </ul>
                    </>
            }
        </div>
    )
}

export default RecentDeals