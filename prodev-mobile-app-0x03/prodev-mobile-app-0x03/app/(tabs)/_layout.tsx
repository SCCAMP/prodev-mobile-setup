import { stack } from "expo-router";

export default function RootLayout() {
  return <stack screenOptions={{
    headerShown: false
  }} />;
  }