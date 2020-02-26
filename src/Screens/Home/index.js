import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";

import { Container } from "../../Config/Style";
import Card from "../../Components/Card";
import api from "../../Services/api";
import { Principal, Url } from "../../Config/Global";
import { List, FlatList } from "./styles";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [pokes, setPokes] = useState([]);
  const [page, setPage] = useState(20);

  const getPokes = async () => {
    if (load) return;
    setLoad(true);

    const response = await api.get("/pokemon/");
    setPokes(response.data.results);
    setLoad(false);
  };

  const getPokeType = async id => {
    if (load) return;
    setLoad(true);

    const response = await api.get(`/pokemon/${id}`);
    setLoad(false);
    return response.data.types;
  };

  useEffect(() => {
    getPokes();
  }, [pokes]);

  const loadPokes = async () => {
    if (load) return;
    setLoad(true);
    const response = await api.get(`/pokemon/?offset=${page}&limit=20`);
    setPage(page + 20);
    setPokes([...pokes, ...response.data.results]);
    setLoad(false);
  };
  console.log(pokes);
  return (
    <Container>
      <List>
        {load && <ActivityIndicator size="large" color={Principal} />}
        <FlatList
          data={pokes}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
          onEndReached={loadPokes}
          onEndReachedThreshold={0.1}
          keyExtractor={item => String(item.url)}
          renderItem={({ item, index }) => {
            return (
              <Card
                title={item.name}
                id={index + 1}
                type={handleTypes(index + 1)}
              />
            );
          }}
        />
      </List>
    </Container>
  );
}
