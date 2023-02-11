import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name='registration'
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name='login'
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
