"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ListingTable.module.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { InputField, ToggleSwitch } from "@/shared";
import { MoreIcon } from "@/shared/svgs/dashboard";
// import RecentDealsCard from '@/components/Admin/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard';
import { GridIcon, ListIcon } from "@/shared/svgs/dashboard";
import ListingCard from "../ListingCard/ListingCard";
import MoreModal from "../MoreModal/MoreModal";
import { customisedTableClasses } from "@/utils/classes";
import Pagination from "../../../../../shared/pagination/Pagination";
import RecentDealsCard from "@/components/UserDashboard/Dashboard/Components/RecentDeals/components/RecentDealsCard/RecentDealsCard";
import { Popper } from "@mui/material";
import { listings, userListingsData } from "@/mock";
import Fade from '@mui/material/Fade';

interface Props {
	activeFilter: string;
}

const ListingTable = ({ activeFilter }: Props) => {
	const [activeLayout, setActiveLayout] = useState("list");
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [selectedRow, setSelectedRow] = useState<any | undefined>();
	const [openPoppover, setOpenPopover] = useState(Boolean(anchorEl));
	const [paginatedTransactions, setPaginatedTransactions] = useState<GridRowsProp>(
		userListingsData.map((item, ind) => { return { ...item, id: ind + 1 } }).slice(0, limit)
	);
	const sharedColDef: GridColDef = {
		field: "",
		sortable: true,
		flex: 1,
	};

	const handlePagination = (page: number) => {
		const start = (page - 1) * limit;
		const end = start + limit;
		setPaginatedTransactions(userListingsData.slice(start, end));
		setPage(page);
	};
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const columns: GridColDef[] = [
		{
			...sharedColDef,

			field: "title",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Product Name",
			minWidth: 300,
			renderCell: ({ row, value }) => (
				<div className={styles.container__name_container}>
					<Image src={row.image} alt={value} width={16} height={16} />
					<p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
						{value}
					</p>
				</div>
			),
		},
		{
			...sharedColDef,

			field: "category",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Category",
			minWidth: 200,
		},
		{
			...sharedColDef,

			field: "date",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Date",
			minWidth: 150,
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
					<ToggleSwitch checked={value?.toLowerCase() === "ongoing"} />
					<p
						style={{ fontSize: "1.2rem" }}
						className={styles.container__status_container__status}
					>
						{value?.toLowerCase() === "ongoing" ? "Live" : "Draft"}
					</p>
				</div>
			),
		},
		{
			...sharedColDef,

			field: "price",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Price",
			minWidth: 150,
		},
		{
			...sharedColDef,

			field: "availability",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Availability",
			minWidth: 150,
			renderCell: ({ value }) => (
				<div className={styles.container__availability_container}>
					<span
						className={styles.container__availability_container__availability}
						data-status={value?.toLowerCase()}
					>
						{value}
					</span>
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
					className={`${styles.container__action_btn} options_icon`}
				>
					<Popper id={'simple-popover'} open={openPoppover} anchorEl={anchorEl} transition>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={200}>
								<div className={`${styles.more_modal} popover-content`}><MoreModal row={selectedRow} activeFilter={activeFilter} /></div>
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


	const coursesColumns: GridColDef[] = [
		{
			...sharedColDef,

			field: "title",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Course Name",
			minWidth: 300,
			renderCell: ({ row, value }) => (
				<div className={styles.container__name_container}>
					<Image src={row.image} alt={value} width={16} height={16} />
					<p className={styles.container__name} style={{ fontSize: "1.2rem" }}>
						{value}
					</p>
				</div>
			),
		},
		{
			...sharedColDef,

			field: "sold_count",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Sold",
			minWidth: 200,
		},
		{
			...sharedColDef,

			field: "revenue",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Revenue",
			minWidth: 150,
		},
		{
			...sharedColDef,

			field: "price",
			cellClassName: styles.table_cell,
			headerClassName: styles.table_header,
			headerName: "Price",
			minWidth: 150,
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
						className={styles.container__status_container__status_courses}
						data-status={value?.toLowerCase()}
					>
						{value?.toLowerCase() === "ongoing" ? "Published" : "Draft"}
					</p>
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
					className={`${styles.container__action_btn} options_icon`}
				>
					<Popper id={'simple-popover'} open={openPoppover} anchorEl={anchorEl} transition>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={200}>
								<div className={`${styles.more_modal} popover-content`}><MoreModal row={selectedRow} activeFilter={activeFilter} /></div>
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




	const listData = [
		{
			id: 1,
			icon: <ListIcon />,
			value: "list",
		},
		{
			id: 2,
			icon: <GridIcon />,
			value: "grid",
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
				<div className={styles.layout_icons}>
					{listData.map(data => (
						<span
							key={data.id}
							onClick={() => setActiveLayout(data.value)}
							data-active={activeLayout === data.value}
							data-type={data.value}
							className={styles.layout_icons__icon}
						>
							{data.icon}
						</span>
					))}
				</div>
			</div>
			{activeLayout === "list" ? (
				<>
					<div
						className={styles.container__table}
						style={{ width: "100%", height: "100%" }}
					>
						<DataGrid
							rows={paginatedTransactions}
							columns={activeFilter.toLowerCase() === "courses" ? coursesColumns : columns}
							hideFooterPagination={true}
							paginationMode="server"
							hideFooter
							autoHeight
							sx={customisedTableClasses}
						/>
						<Pagination
							currentPage={1}
							onPageChange={setPage}
							totalCount={userListingsData.length}
							pageSize={5}
						/>
					</div>

					<ul className={styles.container__cards_container}>
						{userListingsData.map((item, ind) => (
							<RecentDealsCard key={ind} item={item} />
						))}
					</ul>
				</>
			) : (
				<>
					<div className={styles.container__grid}>
						{paginatedTransactions.map(item => (
							<ListingCard key={item.id} props={item} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default ListingTable;
