// import { createContext, useContext, useState } from "react";

// const dataContext = createContext();

// const dataStore = () => {

//     const [show, setShow] = useState(false)
// 	const handleClick = () => {
// 		setShow(!show);
// 	};
// 	return (
// 		<dataContext.Provider>
// 			value=
// 			{{
// 				handleClick,
// 			}}
// 		</dataContext.Provider>
// 	);
// };

// export const useAuth = () => {
// 	const context = useContext(dataContext);
// 	if (context === undefined) {
// 		throw new Error("useAuth must be used within dataProvider");
// 	}
// 	return context;
// };

// export default dataStore;
