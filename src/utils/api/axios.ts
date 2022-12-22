import axios from "axios";

const baseUrl = "http://localhost:4000";
export const apiGet = async (path: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature")}`,
		},
	};
	return await axios.get(`${baseUrl}${path}`, config);
};
