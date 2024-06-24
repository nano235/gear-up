'use client';
import React from 'react'
import styles from './RecentUsers.module.scss'
import { DataGrid, GridAddIcon, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Image from 'next/image';
import { InputField } from '@/shared';
import RecentDealsCard from './components/RecentDealsCard/RecentDealsCard';
import { MoreIcon, TransactionNavIcon, UserIcon } from '@/shared/svgs/dashboard';
import { customisedTableClasses } from '@/utils/classes';
import Link from 'next/link';
const sharedColDef: GridColDef = {

    field: "",
    sortable: true,
    flex: 1,
};
const RecentDeals = () => {
    const rows: GridRowsProp = [
        { id: 1, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },
        { id: 2, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },
        { id: 3, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },
        { id: 4, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },
        { id: 5, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },
        { id: 6, username: 'Lionel messi', email: 'leo@worldbest.com', joined_date: '15 Dec, 2023', account_status: 'active', actions: 'View', },

    ];


    const columns: GridColDef[] = [
        {
            ...sharedColDef,
            field: 'username',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Username',
            minWidth: 250,
            renderCell: ({ row, value }) => (
                <Link href={`/admin/dashboard/${row.id}`} className={styles.container__name_container}>
                    <Image src="/images/admin-img.jpg" alt={value} width={16} height={16} />
                    <p className={styles.container__name} style={{ fontSize: '1.2rem' }}>
                        {value}
                    </p>
                </Link>
            ),
        },
        {
            ...sharedColDef,
            field: 'email',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Email',
            minWidth: 200,
        },
        {
            ...sharedColDef,
            field: 'joined_date',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Joined Date',
            minWidth: 150,
        },
        {
            ...sharedColDef,
            field: 'account_status',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Account status',
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
            <h2 className={styles.container__title}> Recent Users</h2>

            {
                rows.length < 1 ?
                    <div className={styles.empty_rows}>
                        <span className={styles.transaction_icon}>
                            <UserIcon color='#FFB30F' />
                        </span>
                        No data available
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