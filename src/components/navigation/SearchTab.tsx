import { Search } from "lucide-react-native";
import { TabBarItem } from "./TabBarItem";

export function SearchTab({ route, navigation, focused }: any) {
  return (
    <TabBarItem onPress={() => navigation.navigate(route.name)}>
      <Search color={focused ? "white" : "gray"} />
    </TabBarItem>
  );
}
