import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Roboto-ExtraLight": require("../src/assets/fonts/Roboto-ExtraLight.ttf"),
    "Roboto-Light": require("../src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("../src/assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("../src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-ExtraBold": require("../src/assets/fonts/Roboto-ExtraBold.ttf"),
    "Roboto-Black": require("../src/assets/fonts/Roboto-Black.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar animated style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
