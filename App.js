import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import SearchScreen from './Screens/Search';
import CartScreen from './Screens/cart';
import ProfilScreen from './Screens/Profil';
import CartStack from './Stacks/cartStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='CartStack' screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="CartStack" component={CartStack} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}