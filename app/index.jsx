import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/custom-button";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-between items-center h-full px-4 flex-1">
          <View className="w-full justify-center items-center gap-3">
            <Text className="text-6xl font-black text-primary pt-20">
              Traba.
            </Text>
            <Text className="pt-36 font-black text-4xl text-center tracking-tighter">
              Menos <Text className="text-primary">Traba</Text>s, Más{" "}
              <Text className="text-primary">Traba</Text>jos
            </Text>
            <Text
              className="px-10 text-muted-foreground text-center"
              style={{ color: "#858585" }}
            >
              Consigue tu primera oportunidad laboral y comienza tu carrera
              profesional.
            </Text>
          </View>
          <CustomButton
            title="Continuar con correo"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-5"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#9F2DEB" />
    </SafeAreaView>
  );
}
