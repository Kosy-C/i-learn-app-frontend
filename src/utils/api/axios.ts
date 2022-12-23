import axios from 'axios'
const baseUrl = import.meta.env.SERVER_URL
export const apiGet = (path: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('signature')}`,
    },
  }
  return axios.get(`${baseUrl}${path}`, config)
}
