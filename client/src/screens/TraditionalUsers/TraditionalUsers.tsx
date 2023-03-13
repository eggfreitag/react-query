import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { User } from "../../types";
import Loading from "../../components/Loading";

const TraditionalUsers = () => {
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/users");
        setUsers(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error has occurred</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#ff11" }}>
      <ScrollView style={{ flex: 1 }}>
        {users?.map((user) => (
          <Text key={user.id}>{user.repo.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default TraditionalUsers;
