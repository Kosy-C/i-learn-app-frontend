import axios from "axios";
const baseUrl: string = import.meta.env.SERVER_URL;

export const apiGet = async (path: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature") as string}`,
		},
	};
	return await axios.get(`${baseUrl}${path}`, config);
};
