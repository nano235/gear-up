"use client";
import React, { useEffect, useState } from "react";
import styles from "./WalletTransactionsTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { Button, InputField, Pagination } from "@/shared";
// import RecentDealsCard from '@/components/Admin/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard';
import { customisedTableClasses } from "@/utils/classes";
import Link from "next/link";
import { MoreIcon } from "@/shared/svgs/dashboard";
import RecentDealsCard from "@/components/UserDashboard/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard";
import { Fade, Popper } from "@mui/material";
import MoreModal from "./MoreModal/MoreModal";

const WalletTransactionsTable = () => {
	const [page, setPage] = useState(1);
	const [selectedRow, setSelectedRow] = useState<any | undefined>();
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [openPoppover, setOpenPopover] = useState(Boolean(anchorEl));
	const sharedColDef: GridColDef = {
		field: "",
		sortable: true,
		flex: 1,
	};

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};


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

	const columns: GridColDef[] = [
		{
			...sharedColDef,
			field: "name",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Name",
			minWidth: 350,
			renderCell: ({ value }) => (
				<div className={styles.container__name_container}>
					<Image
						src="/images/admin-img.jpg"
						alt={value}
						width={16}
						height={16}
					/>
					<p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
						{value}
					</p>
				</div>
			),
		},
		{
			...sharedColDef,
			field: "transaction_date",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Transaction Date",
			minWidth: 150,
		},
		{
			...sharedColDef,
			field: "amount",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Amount",
			minWidth: 200,
		},
		{
			...sharedColDef,
			field: "status",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Status",
			minWidth: 150,
			renderCell: ({ value }) => (
				<div className={styles.container__status_container}>
					<p
						style={{ fontSize: "1.2rem" }}
						className={styles.container__status_container__status}
						data-status={value.toLowerCase()}
					>
						{value}
					</p>
				</div>
			),
		},
		{
			...sharedColDef,
			field: "id",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Actions",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
			renderCell: ({ row, value }) => (
				<span
					className={`${styles.container__action_btn} options_icon`}
				>
					<Popper id={'simple-popover'} open={openPoppover} anchorEl={anchorEl} transition>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={200}>
								<div className={`${styles.more_modal} popover-content`}><MoreModal row={selectedRow} /></div>
							</Fade>
						)}
					</Popper>


					< MoreIcon onClick={(e) => {
						setOpenPopover(true);
						setSelectedRow(row);
						handlePopoverOpen(e);
					}
					} />

				</span>
			),
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
				setAnchorEl(null);
				setOpenPopover(false);
			}
		};

		// Add event listener to the document
		document.addEventListener('click', handleClick);

		// Clean up the event listener
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);



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
					rows={rows}
					columns={columns}
					paginationMode="server"
					sx={customisedTableClasses}
					hideFooter
					autoHeight
				/>
				<Pagination
					currentPage={1}
					onPageChange={setPage}
					totalCount={rows.length}
					pageSize={5}
				/>
			</div>

			<ul className={styles.container__cards_container}>
				{rows.map(item => (
					<RecentDealsCard key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

export default WalletTransactionsTable;
