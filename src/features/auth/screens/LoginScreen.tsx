import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 flex gap-3 bg-background pl-4 pr-4">
      <Text className="text-foreground text-center font-poppins-medium text-2xl">
        Welcome back!
      </Text>
      <Input placeholder="you@example.com" keyboardType="email-address" />
      <Input placeholder="password" secureTextEntry />
      <Button title="Login" />
    </SafeAreaView>
  );
}
