import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const SearchResults = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        // showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  restaurants: {
    fontSize: 14,
    fontWeight: "normal",
  },
});

export default SearchResults;
