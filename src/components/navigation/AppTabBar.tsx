import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChatTab } from "./ChatTab";
import { HomeTab } from "./HomeTab";
import { NotificationTab } from "./NotificationTab";
import { SearchTab } from "./SearchTab";

export function AppTabBar(props: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex-row h-24 border-t border-t-border bg-black"
    >
      <HomeTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 0}
      />
      <SearchTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
      <NotificationTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
      <ChatTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
    </View>
  );
}
