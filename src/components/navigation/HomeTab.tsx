import { Home } from "lucide-react-native";
import { View } from "react-native";
import { TabBarItem } from "./TabBarItem";

export function HomeTab({ route, navigation, focused }: any) {
  return (
    <TabBarItem onPress={() => navigation.navigate(route.name)}>
      <Home color={focused ? "white" : "gray"} />
      <View className="absolute flex items-center justify-center -right-0.5 -top-0.5 bg-blue-300 rounded-full h-2 w-2"></View>
    </TabBarItem>
  );
}
