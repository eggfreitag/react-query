import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Users from "../screens/Users";
import Home from "../screens/Home/Home";
import TraditionalUsers from "../screens/TraditionalUsers";

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  TraditionalUsers: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MasterNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "React-Native Animation",
        }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          title: "Users",
        }}
      />
      <Stack.Screen
        name="TraditionalUsers"
        component={TraditionalUsers}
        options={{
          title: "TraditionalUsers",
        }}
      />
    </Stack.Navigator>
  );
};

export default MasterNav;
