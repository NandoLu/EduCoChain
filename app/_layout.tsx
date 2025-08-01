import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" options={{ title: 'Início', animation: 'fade_from_bottom' }} />
      <Stack.Screen name="home" options={{ title: 'Home', animation: 'none' }} />
      <Stack.Screen name="screens/wallet" options={{ title: 'Carteira', animation: 'none' }} />
      <Stack.Screen name="screens/contracts" options={{ title: 'Contratos', animation: 'none' }} />
    </Stack>
  );
}