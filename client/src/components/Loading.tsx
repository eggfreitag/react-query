import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Loading = () => {
  const [loading, setLoading] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev.length === 10) {
          return "Loading";
        } else {
          return prev + ".";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "teal", fontSize: 24 }}>{loading}</Text>
    </View>
  );
};

export default Loading;
