import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-ExtraLight": require("../src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("../src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Thin": require("../src/assets/fonts/Poppins-Thin.ttf"),
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
