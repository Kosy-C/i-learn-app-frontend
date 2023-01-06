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
export const apiPost = (path: string, conf={}) => {
	console.log("conf is ", conf)
    const config = {
        ...conf,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("signature")}`,
        },
    };
	console.log("config is ", config)
    return axios.post(`${baseUrl}${path}`, conf);
};
export const apiUpdate = (path: string, conf={}, auth=true) => {
    const config = {
        ...conf,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("signature")}`,
        },
    };
    return axios.put(`${baseUrl}${path}`, config);
};
export const apiDelete = (path: string, auth=true) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("signature")}`,
        },
    };
    return axios.delete(`${baseUrl}${path}`, config);
};