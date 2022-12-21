
import axios from "axios";
export const apiGet = (path: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("signature")}`,
        },
    };
    return axios.get(`${process.env.baseUrl}${path}`, config);
};
