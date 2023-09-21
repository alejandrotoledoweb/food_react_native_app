import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    // Authorization: "Bearer " + process.env.API_KEY,
    Authorization:
      "Bearer 0ruQM8Sn4_6ZGzh_p17BnDRyu3TOFyrNlLg-XO6EGqhf0-_KjcuOpzRuehPB6nP11VYiiTXY7CMjSWmMndbGvqkmyEAXRdgirXobfH-ChlzwPwGvfjgKcKhKo08LZXYx",
  },
});
