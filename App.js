import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './Screens/Home';
import SearchScreen from './Screens/Search';
import CartScreen from './Screens/cart';
import ProfilScreen from './Screens/Profil';
import CartStack from './Stacks/cartStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Search' screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => (<Image source={require("./assets/home.png")} style={{width: 20, height: 20}} />)
          }}/>
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            tabBarIcon: () => (<Image source={require("./assets/search.png")} style={{width: 20, height: 20}} />)
          }}/>
        <Tab.Screen 
          name="Cart" 
          component={CartStack} 
          options={{
            tabBarIcon: () => (<Image source={require("./assets/cart.png")} style={{width: 20, height: 20}} />)
          }}/>
        <Tab.Screen 
          name="Profil" 
          component={ProfilScreen} 
          options={{
            tabBarIcon: () => (<Image source={require("./assets/profil.png")} style={{width: 20, height: 20}} />)
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}