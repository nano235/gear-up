import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
	id: number | string;
	name: string;
}

interface Price {
	value: number;
	enabled: boolean;
}

export interface Item {
	id: number;
	quantity: number;
	name: string;
}

interface Listing {
	id?: number | string;
	items?: Item[];
	title?: string;
	category?: Category;
	subCategory?: Category;
	fieldValues?: {
		name: string;
		fieldType: "single" | "multiple";
		selectedValues: Category[];
	}[];
	description?: string;
	images?: { id: string | null; url: string; fileName: string; type: string }[];
	currency?: { name: string; symbol: string };
	price1Day?: Price;
	price3Days?: Price;
	price7Days?: Price;
	price30Days?: Price;
	buyPrice?: number;
	condition?: string;
	type?: string[];
	perks?: {
		buyNow: boolean;
		freeShipping: boolean;
		makeOffer: boolean;
		pickup: boolean;
		shipping: boolean;
		terms: boolean;
	};
}

const initialState: Listing[] = [];

const listingsSlice = createSlice({
	name: "listings",
	initialState,
	reducers: {
		setListings: (state, action: PayloadAction<Listing[]>) => {
			return action.payload;
		},
		addListing: (state, action: PayloadAction<Listing>) => {
			state.unshift(action.payload);
			return state;
		},
		clearListings: state => {
			return [];
		},
	},
});

export default listingsSlice.reducer;
export const { setListings, addListing, clearListings } = listingsSlice.actions;
