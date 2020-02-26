import React from "react";
import { StyleSheet } from "react-native";

import { Container, Title, ImageView, Type } from "./styles";

export default function Card({ title, id, type }) {
  return (
    <Container style={styles.shadow}>
      <Title>{title}</Title>
      <ImageView
        imageStyle={{ borderRadius: 12 }}
        resizeMode="contain"
        source={{
          uri: "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"
        }}
      />
      <Type>{type}</Type>
    </Container>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 16,
    shadowRadius: 14,

    elevation: 1
  }
});
