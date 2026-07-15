import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function LoginScreen() {
  return (
    <View className="flex-1 bg-background px-4">
      <SafeAreaView>
        <Text className="text-white text-center font-poppins-medium text-2xl">
          Welcome back!
        </Text>
        <Input />
        <Button title="Submit" />
      </SafeAreaView>
    </View>
  );
}
