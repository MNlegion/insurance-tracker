import axios from "axios";

const API_URL = "/api/items/";

// Create a new item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, itemData, config);

  return response.data;
};

const itemService = {
  createItem,
};

export default itemService;
