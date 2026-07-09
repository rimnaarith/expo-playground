import "@/styles/global.css";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <View className="w-full max-w-sm p-4 space-y-2">
        <Text className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Email Address
        </Text>

        <TextInput
          className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:border-slate-700"
          placeholder="Enter your email"
          placeholderTextColor="#9ca3af" // Tailwind gray-400 equivalent
          value={text}
          onChangeText={setText}
        />
      </View>
      <Link href="/(tabs)/home">Go to About screen</Link>
    </View>
  );
}
