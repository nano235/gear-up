"use client";

import { useFetch } from "@/hooks";
import useFetchAll from "@/hooks/useFetchAll";
import { ListingType } from "@/interfaces";
import React, {
	useState,
	useContext,
	createContext,
	useEffect,
	useLayoutEffect,
} from "react";

const AppContext = createContext<any>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [heroHeight, setHeroHeight] = useState<number>(0);
	const [listings, setListings] = useState<any[]>([]);
	const [singleListing, setSingleListing] = useState<any>(null);
	const [listingType, setListingType] = useState<ListingType>(ListingType.Rent);
	const [isMobile, setIsMobile] = useState<boolean>(true);
	const { data }: any = useFetch(`/api`);
	useEffect(() => {
		if (!data) return;
		setListings(data);
	}, [data]);
	useLayoutEffect(() => {
		if (window.innerWidth > 450) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	}, []);
	// function GlobalHooks() {
	// 	useFetchAll();
	// 	return null;
	// }

	return (
		<AppContext.Provider
			value={{
				heroHeight,
				setHeroHeight,
				listings,
				setListings,
				listingType,
				setListingType,
				isMobile,
				singleListing,
				setSingleListing,
			}}
		>
			{/* <GlobalHooks /> */}
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
