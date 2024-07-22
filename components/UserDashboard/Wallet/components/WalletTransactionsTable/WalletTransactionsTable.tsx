"use client";
import React, { useEffect, useState } from "react";
import styles from "./WalletTransactionsTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination } from "@/shared";
import { fiatWalletTransactions } from "@/mock/fiatWalletTransactions.mock";

const WalletTransactionsTable = () => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);
	const [paginatedTransactions, setPaginatedTransactions] = useState(
		fiatWalletTransactions.slice(0, limit)
	);




	const rows: GridRowsProp = [
		{
			id: 1,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Declined",
			actions: "View",
			image: "",
		},
		{
			id: 2,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Awaiting approval",
			actions: "View",
			image: "",
		},
		{
			id: 3,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Completed",
			actions: "View",
			image: "",
		},
		{
			id: 4,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Ongoing",
			actions: "View",
			image: "",
		},
		{
			id: 5,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Declined",
			actions: "View",
			image: "",
		},
		{
			id: 6,
			name: "Canon EOS R5 Camera Kit",
			amount: "$200",
			transaction_date: "15 Dec, 2023",
			status: "Completed",
			actions: "View",
			image: "",
		},
	];




	useEffect(() => {
		// Function to handle click events
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			// Check if the click happened outside the specified elements
			if (
				!target.closest('.options_icon') &&
				!target.closest('.popover-content')
			) {
				/* setAnchorEl(null);
				setOpenPopover(false); */
			}
		};

		// Add event listener to the document
		document.addEventListener('click', handleClick);

		// Clean up the event listener
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

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
				<Pagination
					currentPage={1}
					onPageChange={handlePagination}
					totalCount={fiatWalletTransactions.length}
					pageSize={5}
				/>
			</div>
		</div >
	);
};

export default WalletTransactionsTable;
