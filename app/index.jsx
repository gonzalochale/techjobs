import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-lg font-medium">INICIO DE LA APP</Text>
      <StatusBar style="auto" />
      <Link href="/perfil" style={{ color: "blue" }}>
        Paguina de perfil
      </Link>
    </View>
  );
}
