import React from "react";
import axios from "axios";
import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";

import { User } from "../../types";
import withSuspense from "../../hooks/withSuspense";

const fetchUsers = () => {
  return axios.get("http://localhost:3000/users");
};

const suspenseOption = {
  suspense: true,
};

const Users = () => {
  const {
    data: { data },
  } = useQuery<{ data: User[] }, Error>(["users"], fetchUsers, suspenseOption);

  return (
    <View style={{ flex: 1, backgroundColor: "silver" }}>
      <ScrollView style={{ flex: 1 }}>
        {data?.map((user) => (
          <Text key={user.id}>{user.repo.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default withSuspense(Users);
