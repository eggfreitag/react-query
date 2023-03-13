import React, { useCallback } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Users } from "./types";

const Home = () => {
  const fetchUsers = useCallback(async (): Promise<AxiosResponse<Users[]>> => {
    try {
      const res = await axios.get("http://localhost:3000/users");

      return res;
    } catch (error) {
      const err = error as AxiosError;

      Alert.alert("Error", err.message);
    }
  }, []);

  const handlePress = useCallback(async () => {
    const res = await fetchUsers();

    console.log(res.data[0]);
  }, []);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const users = useQuery({ queryKey: ["User"], queryFn: fetchUsers });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, backgroundColor: "silver" }}></ScrollView>
        <Button onPress={() => handlePress()} title={"Add Todo"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Home;
