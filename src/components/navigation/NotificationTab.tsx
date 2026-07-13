import { Bell } from "lucide-react-native";
import { Text, View } from "react-native";
import { TabBarItem } from "./TabBarItem";

export function NotificationTab({ route, navigation, focused }: any) {
  return (
    <TabBarItem onPress={() => navigation.navigate(route.name)}>
      <Bell color={focused ? "white" : "gray"} />
      <View className="absolute flex items-center justify-center -right-1.5 -top-1.5 bg-blue-400 rounded-full h-5 min-w-5">
        <Text className="text-white font-poppins-medium text-sm">1</Text>
      </View>
    </TabBarItem>
  );
}
