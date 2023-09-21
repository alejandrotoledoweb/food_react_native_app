import React, { useEffect, useState } from "react";
import yelp from "../api/yelpBaseUrl";

export const useResults = () => {
  let [restaurants, setRestaurants] = useState([]);
  let [error, setError] = useState("");

  // useEffect(() => {
  //   searchApi("pasta");
  // }, []);
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "San Jose",
        },
      });
      if (response.data) {
        setRestaurants(response.data.businesses);
        setError("");
      }
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return [searchApi, restaurants, error];
};
