"use client";
import React, { useEffect, useState } from "react";
import styles from "./XlmTransactionTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination } from "@/shared";
import { fiatWalletTransactions } from "@/mock/fiatWalletTransactions.mock";

const XlmTransactionsTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [paginatedTransactions, setPaginatedTransactions] = useState(
        fiatWalletTransactions.slice(0, limit)
    );

    const handlePagination = (page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        setPaginatedTransactions(fiatWalletTransactions.slice(start, end));
    };



    return (
        <div className={styles.container}>
            <div className={styles.container__input_filter_container}>
                <InputField
                    placeholder="Search"
                    icon="/svgs/icon-search-dark.svg"
                    iconTitle="search-icon"
                />
            </div>

            <div>
                <ul className={styles.container__table}>
                    {
                        paginatedTransactions.map((transaction) => (
                            <li className={styles.container__table__row} key={transaction.id}>
                                <div className={styles.container__table__row__left}>
                                    <div className={styles.container__table__row__left__avatar}>
                                        <Image src={transaction.type.toLowerCase() === 'deposit' ? "/svgs/wallet-deposit-green.svg" : "/svgs/wallet-withdraw-yellow.svg"} alt="admin-img" width={16} height={16} />
                                    </div>
                                    <div className={styles.container__table__row__left__name_amount}>
                                        <p className={styles.type}>{transaction.type}</p>
                                        <p className={styles.amount}>{transaction.price}</p>
                                    </div>
                                </div>
                                <div className={styles.container__table__row__right}>
                                    <p className={styles.status} data-status={transaction.status.toLowerCase()}>{transaction.status}</p>
                                    <p className={styles.date}>{transaction.transaction_date}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Pagination
                        currentPage={1}
                        onPageChange={handlePagination}
                        totalCount={fiatWalletTransactions.length}
                        pageSize={5}
                    />
                </div>
            </div>
        </div >
    );
};

export default XlmTransactionsTable;
