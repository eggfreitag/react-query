import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/Home";
import Users from "../screens/Users";

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
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
    </Stack.Navigator>
  );
};

export default MasterNav;
