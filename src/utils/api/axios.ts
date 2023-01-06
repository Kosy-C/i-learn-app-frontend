import axios from "axios";
const baseUrl: string = import.meta.env.VITE_SERVER_URL;

export const apiGet = async (path: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature") as string}`,
		},
	};
	const result = await axios.get(`${baseUrl}${path}`, config);
	return result;
};
export const apiPost = async (path: string, conf: {}) => {
	const result = await axios.post(`${baseUrl}${path}`, conf);
	return result;
};
