import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImg = async (query, page) => {
    const resp = await axios.get(`?key=38388037-1512b522da0d657b891be2adb&q=${query}&page=${page}`);
    return resp.data;
}
