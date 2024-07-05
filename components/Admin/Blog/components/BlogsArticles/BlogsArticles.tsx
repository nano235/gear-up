"use client";
import React, { useState } from "react";
import styles from "./BlogsArticles.module.scss";
import { DataGrid, GridAddIcon, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination, ToggleSwitch } from "@/shared";
import { customisedTableClasses } from "@/utils/classes";
import Link from "next/link";
import { transactions } from "@/mock/transactions.mock";
import RecentDealsCard from "@/components/UserDashboard/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard";
import { blogsData } from "@/mock/blogs.mock";
import { MoreIcon } from "@/shared/svgs/dashboard";

const BlogsTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [paginatedTransactions, setPaginatedTransactions] = useState<GridRowsProp>(
        blogsData.slice(0, limit)
    );

    const sharedColDef: GridColDef = {
        field: "",
        sortable: true,
        flex: 1,
    };

    const handlePagination = (page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        setPaginatedTransactions(transactions.slice(start, end));
        setPage(page);
    };

    const columns: GridColDef[] = [
        {
            ...sharedColDef,
            field: "title",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Title",
            minWidth: 250,
            renderCell: ({ row, value }) => (
                <div className={styles.container__name_container}>
                    <Image src={"https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aWNsZXN8ZW58MHx8MHx8fDA%3D"} alt={value} width={40} height={40} className={styles.blogs_img} />
                    <p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            ...sharedColDef,
            field: "published_date",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Published Date",
            minWidth: 200,
            headerAlign: "center",
            align: "center",
        },
        {
            ...sharedColDef,
            field: "category",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Category",
            minWidth: 150,
            headerAlign: "center",
            renderCell: ({ row, value }) => (
                <div className={styles.tag_container} >
                    <p >
                        {value}
                    </p>
                </div>
            ),
        },
        {
            ...sharedColDef,
            field: "status",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Status",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            renderCell: ({ value }) => (
                <div className={styles.container__status_container}>
                    <ToggleSwitch checked={value === "published"} />
                    <p>{value}</p>
                </div>
            ),
        },
        {
            ...sharedColDef,
            field: "id",
            align: "center",
            headerAlign: "center",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Actions",
            minWidth: 150,
            renderCell: ({ row, value }) => (
                <span
                    className={styles.container__action_btn}
                >
                    <MoreIcon />
                </span>
            ),
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.container__input_filter_container}>
                <InputField
                    placeholder="Search"
                    icon="/svgs/icon-search-dark.svg"
                    iconTitle="search-icon"
                />
                <Link href="/admin/blog/new-blog">
                    <Button
                        buttonType="primary"
                        className={`${styles.transparent_btn} ${styles.btn}`}

                    >
                        <span className={styles.icon}>
                            <GridAddIcon className={styles.icon} />{" "}
                        </span>
                        New post
                    </Button>
                </Link>
            </div>

            <div
                className={styles.container__table}
                style={{ width: "100%", height: "100%" }}
            >
                <DataGrid
                    rows={paginatedTransactions}
                    columns={columns}
                    paginationMode="server"
                    sx={customisedTableClasses}
                    hideFooter
                    autoHeight
                />
                <Pagination
                    currentPage={page}
                    onPageChange={handlePagination}
                    totalCount={transactions.length}
                    pageSize={limit}
                />
            </div>

            <ul className={styles.container__cards_container}>
                {transactions.map(item => (
                    <RecentDealsCard key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default BlogsTable;
