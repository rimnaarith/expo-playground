import { Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-7xl font-roboto-black text-blue-50">Welcome!</Text>
      <Text className="text-7xl font-roboto-extrabold text-blue-100">
        Welcome!
      </Text>
      <Text className="text-7xl font-roboto-bold text-blue-200">Welcome!</Text>
      <Text className="text-7xl font-roboto-semibold text-blue-300">
        Welcome!
      </Text>
      <Text className="text-7xl font-roboto-medium text-blue-400">
        Welcome!
      </Text>
      <Text className="text-7xl font-roboto-regular text-blue-500">
        Welcome!
      </Text>
      <Text className="text-7xl font-roboto-light text-blue-600">Welcome!</Text>
      <Text className="text-7xl font-roboto-extralight text-blue-700">
        Welcome!
      </Text>
    </View>
  );
}
