import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const SearchResults = ({ title, results, navigation }) => {
  if (!results) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        // showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <ResultDetails item={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(SearchResults);
