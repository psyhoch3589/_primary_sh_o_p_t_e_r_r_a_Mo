import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/cart';
import Checkout from '../Screens/Checkout';
import PayementSuccessful from '../Screens/PaymentSuccessful';
import PayementFailed from '../Screens/PaymentFailed';

const Stack = createStackNavigator();

export default MyStack=()=>{
  return (
      <Stack.Navigator initialRouteName='CartPage' screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="CartPage" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="PayementSuccessful" component={PayementSuccessful} />
        <Stack.Screen name="PayementFailed" component={PayementFailed} />
      </Stack.Navigator>
  );
}