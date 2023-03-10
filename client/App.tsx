import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Todos from "./Todos";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
