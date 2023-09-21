import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import { useResults } from "../hooks/useResults";
import SearchResults from "../component/SearchResults";

const SearchScreen = () => {
  let [term, setTerm] = useState("");
  const [searchApi, restaurants, error] = useResults();

  const filterByPrice = (price) => {
    return restaurants.filter((rest) => rest.price == price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onSetTerm={setTerm}
        inTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <SearchResults title="Cost Effective" results={filterByPrice("$")} />
        <SearchResults title="Bit Pricer" results={filterByPrice("$$")} />
        <SearchResults title="Big Spender!" results={filterByPrice("$$$")} />
      </ScrollView>
      <Text style={styles.results}>We found {restaurants.length} items</Text>
      {error ? <Text>{error.message}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  back: {
    // borderColor: "red",
    // borderWidth: 10,
    // flex: 1,
  },
  results: {
    fontSize: 14,
    marginTop: 14,
    alignSelf: "center",
    paddingBottom: 25,
  },
  restaurant: {
    // alignSelf: "flex-start",
  },
});

export default SearchScreen;
