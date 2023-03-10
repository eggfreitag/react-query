import React, { useCallback } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  const query = useQuery({ queryKey: ["User"], queryFn: fetchUsers });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
