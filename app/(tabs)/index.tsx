import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full bg-white">
      <Text className="text-red-500">Hello</Text>
    </SafeAreaView>
  );
}
