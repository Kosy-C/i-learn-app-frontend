import React, { createContext } from "react";

const dataContext = createContext( {
	// data: any;
	// setData: (data: any) => void;
});

const DataProvider = () => {
	return <dataContext.Provider value={{}}></dataContext.Provider>;
};

export const useAuth = () => {
	const context = React.useContext(dataContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within the auth provider");
	}
	return context;
};

export default DataProvider;
