import axios from "axios";
import { User } from "./interfaces";

const API = "https://localhost:7226/";

export const bringStrings = async () => {
    const res = await axios.get(`${API}strungs`);
    return res.data;
};

export const bringString = async (id: number) => {
    const res = await axios.get(`${API}strungs/${id}`);
    return res.data;
};

export const bringUser = async (id: number) => {
    const res = await axios.get(`${API}users/${id}`);
    return res.data;
};

export const updateUser = async (id: number, user: User) => {
    return await axios.patch(`${API}users/${id}`, user);
};

export const login = async (fullname: string, password: string) => {
    return await axios.post(`${API}users/login`, { fullname, password });
};

export const createUser = async (fullname: string, password: string) => {
    const newUser = {
        fullname: fullname,
        password: password,
        isAdmin: false,
    };

    return await axios.post(`${API}users`, newUser);
};
