"use client";
import React, { useState } from "react";
import styles from "./BlogsCategories.module.scss";
import { DataGrid, GridAddIcon, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination } from "@/shared";
import { customisedTableClasses } from "@/utils/classes";
import Link from "next/link";
import { transactions } from "@/mock/transactions.mock";
import RecentDealsCard from "@/components/UserDashboard/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard";
import { blogsCategoriesData } from "@/mock/blogCategories.mock";
import { AddCategory, EditCategory } from "./components";

const BlogsCategories = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [showEditCategory, setShowEditCategory] = useState(false)
    const [showAddCategory, setShowAddCategory] = useState(false)
    const [paginatedTransactions, setPaginatedTransactions] = useState<GridRowsProp>(
        blogsCategoriesData.slice(0, limit)
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
            field: "category",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Category Name",
            minWidth: 250,
            align: "left",
            headerAlign: "left",
            renderCell: ({ row, value }) => (
                <div className={styles.container__name_container}>
                    <Image src={"https://images.unsplash.com/photo-1702423671974-b2555bbd80ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdGVnb3JpZXN8ZW58MHx8MHx8fDA%3D"} alt={value} width={16} height={16} className={styles.blogs_img} />
                    <p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
                        {value}
                    </p>
                </div>
            ),
        },
        {
            ...sharedColDef,
            align: "center",
            headerAlign: "center",
            field: "tag",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Tag",
            minWidth: 200,
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
            align: "right",
            headerAlign: "right",
            field: "id",
            cellClassName: styles.table_cell,
            headerClassName: styles.table_header,
            headerName: "Actions",
            minWidth: 150,
            renderCell: ({ row, value }) => (
                <div
                    className={styles.container__action_btn}
                >
                    <Image src="/svgs/edit.svg" alt="edit" width={16} height={16} onClick={() => setShowEditCategory(true)} />
                    <Image src="/svgs/red-trash.svg" alt="edit" width={16} height={16} />

                </div>
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
                <Button
                    buttonType="primary"
                    className={`${styles.btn}`}
                    onClick={() => setShowAddCategory(true)}
                >
                    <span className={styles.icon}>
                        <GridAddIcon className={styles.icon} />{" "}
                    </span>
                    New Categories
                </Button>
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
            <EditCategory openModal={showEditCategory} setOpenModal={setShowEditCategory} />
            <AddCategory openModal={showAddCategory} setOpenModal={setShowAddCategory} />
        </div>
    );
};

export default BlogsCategories;
