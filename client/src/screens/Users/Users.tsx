import React from "react";
import axios from "axios";
import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import withSuspense from "../../hooks/withSuspense";

const Users = () => {
  const { isLoading, data } = useQuery(
    ["users"],
    () => {
      return axios.get("http://localhost:3000/users");
    },
    { suspense: true }
  );

  return (
    <View style={{ flex: 1, backgroundColor: "silver" }}>
      <Text>{data && data.data[0].created_at}</Text>
    </View>
  );
};

export default withSuspense(Users);
