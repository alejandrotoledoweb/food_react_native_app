import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import SearchBar from "../component/SearchBar";
import { useResults } from "../hooks/useResults";
import SearchResults from "../component/SearchResults";
import yelpBaseUrl from "../api/yelpBaseUrl";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  let [result, setResult] = useState(null);

  const getResult = async () => {
    const response = await yelpBaseUrl.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult();
  }, [id]);

  return (
    <>
      {result ? (
        <>
          <Text style={styles.title}>Result Show Screen</Text>
          <Text style={styles.title}>Id: {id}</Text>
          <Text style={styles.title}>Name of Restaurant: {result?.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 200,
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    alignSelf: "center",
  },
});

export default ResultShowScreen;
