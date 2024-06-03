'use client';
import React, { useState } from 'react'
import styles from './ListingTable.module.scss'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Image from 'next/image';
import { InputField, ToggleSwitch } from '@/shared';
import { MoreIcon } from '@/shared/svgs/dashboard';
import RecentDealsCard from '@/components/Admin/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard';
import { GridIcon, ListIcon } from '@/shared/svgs/dashboard'
import ListingCard from '../ListingCard/ListingCard';
import { Switch } from '@mui/material';
import MoreModal from '../MoreModal/MoreModal';

const ListingTable = () => {
    const [activeLayout, setActiveLayout] = useState('list')
    const [activeRow, setActiveRow] = useState<number | null>(null)
    const [showMoreModal, setShowMoreModal] = useState(false)
    const rows: GridRowsProp = [
        { id: 1, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "rented out", date: "15 Dec, 2023", category: "Microphone" },
        { id: 2, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'ongoing', actions: 'View', image: "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "Active listing", date: "15 Dec, 2023", category: "Camera" },
        { id: 3, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: "https://images.unsplash.com/photo-1597183739841-5ca26ab0a604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "hidden", date: "15 Dec, 2023", category: "Camera" },
        { id: 4, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'ongoing', actions: 'View', image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "rented out", date: "15 Dec, 2023", category: "Speaker" },
        { id: 5, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Declined', actions: 'View', image: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "hidden", date: "15 Dec, 2023", category: "Camera" },
        { id: 6, title: 'Canon EOS R5 Camera Kit', price: '$200', transaction_date: '15 Dec, 2023', type: 'Rental', status: 'Completed', actions: 'View', image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", availability: "active listing", date: "15 Dec, 2023", category: "Camera" },

    ];


    const columns: GridColDef[] = [
        {
            field: 'title',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Product Name',
            minWidth: 250,
            renderCell: ({ row, value }) => (
                <div className={styles.container__name_container}>
                    <Image src={row.image} alt={value} width={16} height={16} />
                    <p className={styles.container__name} style={{ fontSize: '1.2rem' }}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            field: 'category',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Category',
            minWidth: 200,
        },
        {
            field: 'date',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Date',
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
                    <ToggleSwitch checked={value?.toLowerCase() === 'ongoing'} />
                    <p style={{ fontSize: '1.2rem' }} className={styles.container__status_container__status}>
                        {value?.toLowerCase() === 'ongoing' ? 'Live' : 'Draft'}
                    </p>
                </div>
            ),
        },
        {
            field: 'price',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Price',
            minWidth: 150,
        },
        {
            field: 'availability',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Availability',
            maxWidth: 100,
            renderCell: ({ value }) => (
                <div className={styles.container__availability_container}>
                    <span className={styles.container__availability_container__availability} data-status={value?.toLowerCase()}>
                        {value}
                    </span>
                </div>
            ),
        },
        {
            field: 'actions',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Actions',
            maxWidth: 100,
            renderCell: ({ row, value }) => (
                <div className={styles.container__action_cell}>
                    <span onClick={() => handleClickMore(row.id)} className={styles.container__actions_container}>
                        <MoreIcon />
                    </span>
                    {
                        showMoreModal && activeRow === row.id && <MoreModal />
                    }

                </div>
            ),
        },
    ];
    console.log(activeRow)
    const handleClickMore = (id: number) => {
        console.log('More clicked', id)
        setShowMoreModal((prev) => !prev)
        setActiveRow(id)
    };

    const listData = [
        {
            id: 1,
            icon: <ListIcon />,
            value: 'list'
        },
        {
            id: 2,
            icon: <GridIcon />,
            value: 'grid'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.container__input_filter_container}>
                <InputField placeholder='Search' icon='/svgs/icon-search-dark.svg' iconTitle='search-icon' />
                <div className={styles.layout_icons}>
                    {
                        listData.map((data) => (
                            <span key={data.id} onClick={() => setActiveLayout(data.value)} data-active={activeLayout === data.value} className={styles.layout_icons__icon}>
                                {data.icon}
                            </span>
                        ))
                    }
                </div>
            </div>
            {
                activeLayout === 'list' ? (
                    <>
                        <div className={styles.container__table}>
                            <DataGrid rows={rows} columns={columns}
                                hideFooterPagination={true} paginationMode="server" sx={{
                                    height: '100%',
                                    width: '100%',

                                }}
                                classes={{
                                    overlay: styles.dataGridOverlay,
                                }} />
                        </div>

                        <ul className={styles.container__cards_container}>
                            {
                                rows.map((item) => (
                                    <RecentDealsCard key={item.id} item={item} />
                                ))
                            }
                        </ul>
                    </>
                ) : (
                    <>
                        <div className={styles.container__grid}>
                            {
                                rows.map((item) => (
                                    <ListingCard key={item.id} props={item} />
                                ))
                            }
                        </div>
                    </>
                )
            }


        </div>
    )
}

export default ListingTable