import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import ActivityDetails from './screens/ActivityDetails';
import Calendar from './screens/Calendar'
import Person from './screens/Person'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function HomeTab() {
  return (
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
          paddingHorizontal: 15,
        },
        tabBarItemStyle: {
          marginHorizontal: 10,
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
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ActivityDetails"
        component={ActivityDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="poll" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-month-outline" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Person"
        component={Person}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={30} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-Medium': require('./assets/fonts/GeneralSans-Medium.otf'),
    'GeneralSans-Semibold': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-Bold': require('./assets/fonts/GeneralSans-Bold.otf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="HomeTab" component={HomeTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

