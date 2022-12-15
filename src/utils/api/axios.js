import axios from "axios";
const baseUrl = "http://localhost:4000";

export const apiPost = (path) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature")}`,
		},
	};
	return axios.get(`${baseUrl}${path}`, config);
};
