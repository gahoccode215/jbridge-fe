import axios from "axios";

const API = "http://localhost:8081/api/auth";

export const login = async (identifier, password) => {
    return axios.post(`${API}/login`, {
        identifier,
        password
    });
};

export const register = async (data) => {
    return axios.post(`${API}/register`, data);
};