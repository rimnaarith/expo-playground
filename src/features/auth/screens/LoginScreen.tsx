import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function LoginScreen() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView>
        <Text className="text-white text-center font-poppins-medium text-2xl">
          Login
        </Text>
      </SafeAreaView>
    </View>
  );
}
