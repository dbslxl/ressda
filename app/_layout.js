import { Tabs } from 'expo-router/tabs';
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          title: 'Home'          
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="board"
        options={{
          // This tab will no longer show up in the tab bar.
          title: 'Board',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="picture"
        options={{
          // This tab will no longer show up in the tab bar.
          title: 'Picture',
          headerShown: false,          
        }}
      />
    </Tabs>
            
  );
}
