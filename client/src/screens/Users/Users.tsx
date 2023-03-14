import axios, { AxiosError } from "axios";
import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { User } from "../../types";
import withSuspense from "../../hooks/withSuspense";

const fetchUsers = () => {
  return axios.get("http://localhost:3000/users");
};

const suspenseOption = {
  suspense: true,
};

type ActualResponse = string[]; // useQuery의 select를 통해 변환된 데이터의 실질적 타입 명시
// onSuccess, onError의 콜백 함수의 인자로도 사용됨

const Users = () => {
  const { bottom } = useSafeAreaInsets();

  const onSuccess = useCallback((data: ActualResponse) => {
    console.log("Perform side effect after data fetching", data[0]);
  }, []);

  const onError = useCallback(() => {
    console.log("Perform side effect after encountering error");
  }, []);

  const { data, refetch, isFetching } = useQuery<
    { data: User[] },
    AxiosError,
    ActualResponse
  >(["users"], fetchUsers, {
    ...suspenseOption,
    // cacheTime: 10000, // 10초간 캐시를 사용, 10초가 지나면 재요청 (default: 5분)
    // staleTime: 10000, // 캐시된 데이터가 만료되기 전에 사용할 수 있는 시간, staleTime이 지나면 재요청 (default: 0)
    // refetchOnMount: true, // 컴포넌트가 마운트 될 때마다 재요청 (default: true)
    // refetchOnWindowFocus: true, // 윈도우가 포커스 될 때마다 재요청 (default: false)
    // refetchInterval: 10000, // 10초마다 재요청 (default: false)
    // refetchIntervalInBackground: true, // 백그라운드에서도 재요청 (default: false)
    enabled: false,
    onSuccess: (data) => onSuccess(data),
    onError,
    select: ({ data }: { data: User[] }) => {
      const ids = data.map((user: User) => user.id);

      return ids;
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: "silver", paddingBottom: bottom }}>
      <ScrollView style={{ flex: 1 }}>
        {data?.map((id) => (
          <Text key={id}>{id}</Text>
        ))}
      </ScrollView>
      <Button title="Fetch Users" onPress={() => refetch()} />
    </View>
  );
};

export default withSuspense(Users);
