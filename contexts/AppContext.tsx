"use client";

import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<any>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [heroHeight, setHeroHeight] = useState<number>(0);
	// console.log(heroHeight);

	return (
		<AppContext.Provider value={{ heroHeight, setHeroHeight }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
