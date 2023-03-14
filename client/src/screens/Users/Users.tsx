import React from "react";
import axios from "axios";
import { Button, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";

import { User } from "../../types";
import withSuspense from "../../hooks/withSuspense";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const fetchUsers = () => {
  return axios.get("http://localhost:3000/users");
};

const suspenseOption = {
  suspense: true,
};

const Users = () => {
  const { bottom } = useSafeAreaInsets();
  const { data, refetch, isFetching } = useQuery<{ data: User[] }, Error>(
    ["users"],
    fetchUsers,
    {
      ...suspenseOption,
      // cacheTime: 10000, // 10초간 캐시를 사용, 10초가 지나면 재요청 (default: 5분)
      // staleTime: 10000, // 캐시된 데이터가 만료되기 전에 사용할 수 있는 시간, staleTime이 지나면 재요청 (default: 0)
      // refetchOnMount: true, // 컴포넌트가 마운트 될 때마다 재요청 (default: true)
      // refetchOnWindowFocus: true, // 윈도우가 포커스 될 때마다 재요청 (default: false)
      // refetchInterval: 10000, // 10초마다 재요청 (default: false)
      // refetchIntervalInBackground: true, // 백그라운드에서도 재요청 (default: false)
      enabled: false,
    }
  );

  return (
    <View style={{ flex: 1, backgroundColor: "silver", paddingBottom: bottom }}>
      <ScrollView style={{ flex: 1 }}>
        {data?.data.map((user) => (
          <Text key={user.id}>{user.repo.name}</Text>
        ))}
      </ScrollView>
      <Button title="Fetch Users" onPress={() => refetch()} />
    </View>
  );
};

export default withSuspense(Users);
