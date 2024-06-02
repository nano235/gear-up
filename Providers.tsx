"use client";
import { AppProvider } from "@/contexts/AppContext";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppProvider>{children}</AppProvider>
			</PersistGate>
		</Provider>
	);
};

export default Providers;
