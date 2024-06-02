'use client';
import React from 'react'
import styles from './TotalEarnings.module.scss'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { customisedTableClasses } from '@/utils/classes';
import { EllipseIcon } from '@/shared/svgs/dashboard';
import { PieChartComponent } from '@/shared';

const TotalEarnings = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
    ];

    const COLORS = ['#FFB30F', '#B57F0B', '#FFE7B5',];

    const rows: GridRowsProp = [
        { id: 1, no_of_products: 1, type: 'Gear rental', revenue_percentage: 'World', value: 'Hello World' },
        { id: 2, no_of_products: 2, type: 'Gear sales', revenue_percentage: 'is Awesome', value: 'Hello World' },
        { id: 3, no_of_products: 3, type: 'Course sales', revenue_percentage: 'is Amazing', value: 'Hello World' },
    ];

    const columns: GridColDef[] = [
        {
            field: 'type', headerName: 'Type', minWidth: 150, renderCell: ({ value }) => (
                <div className={styles.container__type_container}>
                    <EllipseIcon color={value === 'Gear rental' ? '#FFB30F' : value === 'Gear sales' ? '#B57F0B' : '#FFE7B5'} />
                    <p>{value}</p>
                </div>
            ),
        },
        { field: 'no_of_products', headerName: 'No of Products', minWidth: 200 },
        { field: 'revenue_percentage', headerName: '% of Revenue', minWidth: 150 },
        { field: 'value', headerName: 'Value', minWidth: 150 },
    ];

    return (
        <div className={styles.container}>
            <div style={{ height: 300, width: '300px' }}>
                <PieChartComponent data={data} colors={COLORS}/>
            </div>
            <div style={{ width: '700px' }}>
                <DataGrid rows={rows} columns={columns} sx={customisedTableClasses} pagination={undefined} />
            </div>
        </div>
    )
}

export default TotalEarnings