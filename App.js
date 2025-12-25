import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from './screens/Home';
import HomeSvg from './assets/home.svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1A1A1A',
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 20,
            paddingTop: 15,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            position: 'absolute',
            overflow: 'hidden',
            bottom: 0,
          },
          tabBarActiveTintColor: '#BFF205',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeSvg width={30} height={30} fill={color} />
            ),
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}