import React, { createContext, useState } from "react";

const dataContext = createContext();

const DataProvider = ({children}: any) => {
	const [initialStar, setInitialStar] = useState(1);

	return (<dataContext.Provider 
		value={{initialStar, setInitialStar}}>
			{children}
	</dataContext.Provider>
	);
};

export const useAuth = () => {
	const context = React.useContext(dataContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within the auth provider");
	}
	return context;
};

export default DataProvider;