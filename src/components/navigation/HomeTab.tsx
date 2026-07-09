import { Home } from "lucide-react-native";
import { TabBarItem } from "./TabBarItem";

export function HomeTab({ route, navigation, focused }: any) {
  return (
    <TabBarItem onPress={() => navigation.navigate(route.name)}>
      <Home color={focused ? "white" : "gray"} />
    </TabBarItem>
  );
}
