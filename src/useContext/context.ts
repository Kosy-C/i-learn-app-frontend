import { createContext, useState } from "react";

// const AppContext = createContext();

// export function AppProvider({ children }: any) {
//     const [lower, setLower] = useState(1)
//     const [number, setNumber] = useState(0)
//     const [upper, setUpper] = useState(10)
//     const [guess, setGuess] = useState("none")
//     const [initialValue, setInitialValue] = useState({lowerBound:"", upperBound:""})
//     const [initialGuess, setInitialGuess] = useState({guess:""})

//     return (
//         <AppContext.Provider
//           value={{
//             lower,
//             upper,
//             setLower,
//             setUpper,
//             initialValue,
//             setInitialValue,
//             initialGuess,
//             setInitialGuess,
//             guess,
//             setGuess,
//             number,
//             setNumber
//           }}
//         >
//           {children}
//         </AppContext.Provider>
//       );
// }
// export default AppContext;

// import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

// export interface GlobalStateInterface {
//   firstname: string;
//   lastname: string;
//   age: string;
// }

// const GlobalStateContext = createContext({
//   state: {} as Partial<GlobalStateInterface>, st: any,
//   initialStar: {} as Partial<GlobalStateInterface>,
//   setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
//   setInitialStar: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,

// });

// const GlobalStateProvider = ({
//   children,
//   value = {},
// }: {
//   children: React.ReactNode;
//   value?: any;
// }) => {
//   const [state, setState] = useState(value);
//   const [initialStar, setInitialStar] = useState(1);

//   return (
//     <GlobalStateContext.Provider
//     value={{ state, setState, initialStar, setInitialStar
//     }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

// const useGlobalState = () => {
//   const context = useContext(GlobalStateContext);
//   if (!context) {
//     throw new Error("useGlobalState must be used within a GlobalStateContext");
//   }
//   return context;
// };

// export { GlobalStateProvider, useGlobalState };
