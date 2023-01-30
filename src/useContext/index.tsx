/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { createContext } from "react";
import { apiPost } from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from "axios";
import { useLocation } from "react-router-dom";

export interface LoginData {
	email?: string;
	password?: string;
}
export interface GlobalStateInterface {
	LoginConfig: (data: LoginData) => Promise<void>;
}
export const dataContext = createContext<GlobalStateInterface | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
	/** ==============Login======= **/

	const LoginConfig: (data: LoginData) => Promise<void> = async (
		data: LoginData
	) => {
		try {
			const response: AxiosResponse<any, any> = await apiPost(
				"/users/login",
				data
			);

			const signature: string = response.data.signature;

			localStorage.setItem("signature", signature);
			localStorage.setItem("user", response.data.areaOfInterest || "backend");
			localStorage.setItem("userType", response.data.userType);

			if (response.status === 200) {
				window.location.href = "/dashboard";
			}
		} catch (err: any) {
			console.log(err.response.data, "error message");
			toast.error(err.response?.data?.Error || "Something went wrong");
		}
	};

	return (
		<dataContext.Provider
			value={{
				LoginConfig,
			}}
		>
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
