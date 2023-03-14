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
  } = useQuery<{ data: User[] }, Error>(["users"], fetchUsers, {
    ...suspenseOption,
    // cacheTime: 10000, // 10초간 캐시를 사용, 10초가 지나면 재요청 (default: 5분)
    // staleTime: 10000, // 캐시된 데이터가 만료되기 전에 사용할 수 있는 시간, staleTime이 지나면 재요청 (default: 0)
  });

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
