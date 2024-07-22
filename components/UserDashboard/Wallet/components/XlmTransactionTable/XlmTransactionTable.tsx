"use client";
import React, { useEffect, useState } from "react";
import styles from "./XlmTransactionTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination } from "@/shared";
import { fiatWalletTransactions } from "@/mock/fiatWalletTransactions.mock";
import { xlmTransactions } from "@/mock/xlmTransaction.mock";

const XlmTransactionsTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [paginatedTransactions, setPaginatedTransactions] = useState(
        xlmTransactions.slice(0, limit)
    );

    const handlePagination = (page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        setPaginatedTransactions(xlmTransactions.slice(start, end));
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
                                    <p className={styles.amount}>from: {`${transaction.address.substring(0, 5)}....${transaction.address.slice(-4)}`}</p>
                                </div>
                            </div>
                            <div className={styles.container__table__row__right}>
                                <p className={styles.type} data-type={transaction?.type.toLowerCase()}>{transaction.xlm_amount}XLM</p>
                                <p className={styles.date}>{transaction.transaction_date}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <Pagination
                currentPage={page}
                onPageChange={handlePagination}
                totalCount={fiatWalletTransactions.length}
                pageSize={limit}

            />
        </div >
    );
};

export default XlmTransactionsTable;
