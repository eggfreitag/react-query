import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import MasterNav from "./src/Navigators/MasterNav";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MasterNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
