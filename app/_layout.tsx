import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import Toast from "react-native-toast-notifications/lib/typescript/toast";

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ToastProvider>
  );
}
