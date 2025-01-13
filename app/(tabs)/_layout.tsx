import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
      <Tabs screenOptions={{
        headerShown: false,
      }}>
        <Tabs.Screen name="index" options={{title: "Home", headerShown: false}}/>
        <Tabs.Screen name="contato" options={{title: "Contato", headerShown: false}}/>
      </Tabs>
  );
}
