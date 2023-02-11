import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/mainScreen/ProfileScreen';
import CreateScreen from './screens/mainScreen/CreateScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  const AuthStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      {!isAuth && (
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{headerShown: false}}
            name='registration'
            component={RegistrationScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name='login'
            component={LoginScreen}
          />
        </AuthStack.Navigator>
      )}

      {isAuth && (
        <MainTab.Navigator>
          <MainTab.Screen name='posts' component={PostsScreen}/>
          <MainTab.Screen name='create' component={CreateScreen}/>
          <MainTab.Screen name='profile' component={ProfileScreen}/>
        </MainTab.Navigator>
      )}

    </NavigationContainer>
  );
}
