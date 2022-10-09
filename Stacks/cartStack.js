import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/cart';
import Checkout from '../Screens/Checkout';

const Stack = createStackNavigator();

export default MyStack=()=>{
  return (
      <Stack.Navigator initialRouteName='Cart' screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
  );
}