import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://full-stack-ecommerce-be-production.up.railway.app",
});

export const fetchItems = async () => {
  try {
    const { data } = await baseURL.get("/items");
    return data.items;
  } catch (error) {
    throw error;
  }
};

export const fetchUserItems = async (user_id) => {
  try {
    const { data } = await baseURL.get(`/items/${user_id}`);
    return data.items;
  } catch (error) {
    throw error;
  }
};

export const fetchUserItemByID = async (user_id, item_id) => {
  try {
    const { data } = await baseURL.get(`/items/${user_id}/${item_id}`);
    return data.item;
  } catch (error) {
    throw error;
  }
};
