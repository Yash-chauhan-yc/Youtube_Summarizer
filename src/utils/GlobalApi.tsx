import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_CUSTOM_TOKEN;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getHomePageData = async () => {
  const response = await axiosClient.get("/homepage");
  return response.data.data;
};

export default {
  getHomePageData,
};
