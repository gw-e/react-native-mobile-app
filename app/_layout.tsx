import '@/global.css';
import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Redirect href="/" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
