import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChatTab } from "./ChatTab";
import { HomeTab } from "./HomeTab";
import { NotificationTab } from "./NotificationTab";
import { SearchTab } from "./SearchTab";

export function AppTabBar(props: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const getRoute = (name: string) => {
    return props.state.routes.find((r) => r.name === name)!;
  };

  const isFocused = (name: string) => {
    return props.state.routes[props.state.index].name === name;
  };
  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex-row h-24 border-t border-t-border bg-background"
    >
      <HomeTab
        route={getRoute("home")}
        navigation={props.navigation}
        focused={isFocused("home")}
      />
      <SearchTab
        route={getRoute("search")}
        navigation={props.navigation}
        focused={isFocused("search")}
      />
      <NotificationTab
        route={getRoute("notifications")}
        navigation={props.navigation}
        focused={isFocused("notifications")}
      />
      <ChatTab
        route={getRoute("chat")}
        navigation={props.navigation}
        focused={isFocused("chat")}
      />
    </View>
  );
}
