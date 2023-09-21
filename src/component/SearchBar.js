import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onSetTerm, inTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={25} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(newValue) => onSetTerm(newValue)}
        onEndEditing={() => inTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F9EEAE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  input: {
    marginLeft: 15,
    color: "black",
    padding: 15,
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
