import axios from "axios";

const env = process.env.NODE_ENV
export const baseURL = (env === 'production') ? 'https://api.digichain.finance' : 'http://localhost:5000/api/v1';
export const uploadURL = baseURL + '/';

export const API = axios.create({ baseURL });

export const setAuthToken = token => {
    if (token) 
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else
        delete API.defaults.headers.common["Authorization"];
};
