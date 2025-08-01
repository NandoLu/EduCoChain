import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="home" options={{ title: 'Início', animation: 'none' }} />
      <Stack.Screen name="screens/wallet" options={{ title: 'Carteira', animation: 'none' }} />
      <Stack.Screen name="screens/contracts" options={{ title: 'Contratos', animation: 'none' }} />
    </Stack>
  );
}