import React from "react";
import axios from "axios";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Todos = () => {
  const getTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const postTodo = async (todo) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {query.data?.map((todo) => (
          <Text key={todo.id}>{todo.title}</Text>
        ))}
      </View>

      <Button
        onPress={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
        title={"Add Todo"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Todos;
