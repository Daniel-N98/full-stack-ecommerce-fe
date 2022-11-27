import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://full-stack-ecommerce-be-production.up.railway.app",
});

export const fetchUserItems = async (user_id) => {
  try {
    const { data } = await baseURL.get(`/items/${user_id}`);
    console.log(data);
    return data.items;
  } catch (error) {
    throw error;
  }
};
