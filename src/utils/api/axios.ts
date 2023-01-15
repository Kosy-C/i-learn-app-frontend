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

// export const apiGet = (path: string, auth=true) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("signature")}`,
//         },
//     };
//     return axios.get(`${baseUrl}${path}`, config);
// };
export const apiPost = async (path: string, conf: any) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature") as string}`,
		},
	};
	return await axios.post(`${baseUrl}${path}`, conf, config);
};
export const apiUpdate = async (path: string, conf = {}, auth = true) => {
	const config = {
		...conf,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature") as string}`,
		},
	};
	return await axios.put(`${baseUrl}${path}`, config);
};
export const apiDelete = async (path: string, auth = true) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("signature") as string}`,
		},
	};
	return await axios.delete(`${baseUrl}${path}`, config);
};
