import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeTab } from "./HomeTab";

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
      <HomeTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
      <HomeTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
      <HomeTab
        route={props.state.routes[0]}
        navigation={props.navigation}
        focused={props.state.index === 2}
      />
    </View>
  );
}
