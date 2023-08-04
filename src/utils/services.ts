import axios from "axios";

const API = "https://localhost:7226/";

export const bringStrings = async () => {
    const res = await axios.get(`${API}strungs`);
    return res.data;
};

export const bringString = async (id: number) => {
    const res = await axios.get(`${API}strungs/${id}`);
    return res.data;
};
