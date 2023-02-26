import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "b7b1c9e1c9mshf1ddf3506a1000bp168d7ajsn1c0dc59dd13a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
