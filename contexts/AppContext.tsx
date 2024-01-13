import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";

const AppContext = createContext<any>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();
	const route = router.asPath;
	const [themeColor, setThemeColor] = useState<"light" | "dark">("light");
	const [drinkType, setDrinkType] = useState<"soft" | "alcohol">("soft");
	useEffect(() => {
		if (route === "/") {
			setDrinkType("soft");
		} else {
			setDrinkType("alcohol");
		}
	}, [route]);

	return (
		<AppContext.Provider value={{ themeColor, setThemeColor, drinkType }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
