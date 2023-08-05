import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "0fef617dc3mshc1574f70e93281dp1a8931jsn6730d2318c4e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
