import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>
        {item.rating} stars, {item.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginLeft: 15,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
    marginBottom: 8,
  },
});

export default ResultDetails;
