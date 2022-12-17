import React, { createContext } from "react";
// import { apiGet } from "../utils/api/axios";


// type History= {
//     coursetitle: string;
//     subtitle: string;
//     name: string;
// }

// export const userContext = createContext<History>({coursetitle: "", subtitle: "", name: ""});

// const DataProvider = ({ children }: any) => {
   
//   const getStudentHistory = async () => {
//     try {
//         const { data } = await apiGet("/student/history");
//         return data.courses;
//       }
//      catch (error: unknown) {
//         console.log(error);
        
//     }
   
//   return (
//     <userContext.Provider value={{ getStudentHistory }}>
//       {children}
//     </userContext.Provider>
//   );
// };


// export const useAuth = () => {
//     const context = React.useContext(userContext);
//     if(context === undefined){
//         throw new Error('useAuth must be used within a AuthProvider')
//     }
//     return context;
// }

// export default DataProvider;
