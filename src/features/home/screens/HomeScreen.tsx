import { Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-7xl font-poppins-black text-blue-50">Welcome!</Text>
      <Text className="text-7xl font-poppins-extrabold text-blue-100">
        Welcome!
      </Text>
      <Text className="text-7xl font-poppins-bold text-blue-200">Welcome!</Text>
      <Text className="text-7xl font-poppins-semibold text-blue-300">
        Welcome!
      </Text>
      <Text className="text-7xl font-poppins-medium text-blue-400">
        Welcome!
      </Text>
      <Text className="text-7xl font-poppins-regular text-blue-500">
        Welcome!
      </Text>
      <Text className="text-7xl font-poppins-light text-blue-600">
        Welcome!
      </Text>
      <Text className="text-7xl font-poppins-extralight text-blue-700">
        Welcome!
      </Text>
    </View>
  );
}
