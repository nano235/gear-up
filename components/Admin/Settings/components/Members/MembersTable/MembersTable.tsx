"use client";
import React, { useState } from "react";
import styles from "./MembersTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { InputField, Pagination, ToggleSwitch } from "@/shared";
import { customisedTableClasses } from "@/utils/classes";
import Link from "next/link";
import { membersData } from "@/mock/members.mock";
import { ListingCard } from "@/components/Admin/Listings/components";
import { useRouter } from "next/navigation";
import MembersCardMob from "../MembersCardMob/MembersCardMob";

const MembersTable = () => {
    const [activeLayout, setActiveLayout] = useState("list");
    const [activeRow, setActiveRow] = useState<number | null>(null);
    const [showMoreModal, setShowMoreModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(7);
    const router = useRouter();
    const [paginatedData, setPaginatedData] = useState(membersData.slice(0, limit));
    const sharedColDef: GridColDef = {
        field: "",
        sortable: true,
        flex: 1,
    };

    const columns: GridColDef[] = [
        {
            ...sharedColDef,

            field: "name",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Name",
            minWidth: 250,
            renderCell: ({ row, value }) => (
                <div className={styles.container__name_container}>
                    <Image src={'https://images.unsplash.com/photo-1541752171745-4176eee47556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D'} alt={value} width={16} height={16} />
                    <p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            ...sharedColDef,

            field: 'email',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Email',
            minWidth: 150,
        },
        {
            ...sharedColDef,

            field: 'role',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Role',
            minWidth: 150,
            renderCell: ({ value }) => (
                <div className={styles.role_container}>
                    <p style={{ fontSize: '1.2rem' }} className={styles.role}>
                        {value}  <Image src='/svgs/filled-chevron.svg' height={10} width={10} alt='arrow' className={styles.icon} />
                    </p>
                </div>
            ),
        },
        {
            ...sharedColDef,
            field: 'actions',
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: 'Actions',
            maxWidth: 150,
            renderCell: ({ row, value }) => (
                <div className={styles.actions_container}>
                    <p style={{ fontSize: '1.2rem' }} className={styles.action}>
                        <Image src='/svgs/trash.svg' height={10} width={10} alt='arrow' className={styles.icon} />
                        Remove
                    </p>
                </div>
            ),
        },
    ];

    const handleClickMore = (id: number) => {
        console.log('More clicked', id)
        setShowMoreModal((prev) => !prev)
        setActiveRow(id)
    };

    const handlePagination = (page: number) => {
        const start = (page - 1) * limit;
        const end = page * limit;
        setPaginatedData(membersData.slice(start, end));
    }

    const handleRowClick = (id: any) => {
        console.log('Row clicked', id)
        router.push(`/admin/settings/members/${id}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__input_filter_container}>
                <InputField
                    placeholder="Search"
                    icon="/svgs/icon-search-dark.svg"
                    iconTitle="search-icon"
                />
            </div>

            <div
                className={styles.container__table}
                style={{ width: "100%", height: "100%" }}
            >
                <DataGrid
                    rows={paginatedData}
                    columns={columns}
                    hideFooterPagination={true}
                    paginationMode="server"
                    hideFooter
                    autoHeight
                    sx={customisedTableClasses}
                    onRowClick={(row) => handleRowClick(row.id)}
                />
            </div>

            <ul className={styles.container__cards_container}>
                {paginatedData.map(item => (
                    <MembersCardMob key={item.id} item={item} />
                ))}
            </ul>
            <Pagination
                currentPage={1}
                onPageChange={handlePagination}
                totalCount={paginatedData.length}
                pageSize={5}
            />
        </div>
    );
};

export default MembersTable;
