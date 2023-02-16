import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/mainScreen/ProfileScreen/ProfileScreen';
import CreatePostsScreen from './screens/mainScreen/CreatePostsScreen/CreatePostsScreen';
import PostsScreen from './screens/mainScreen/PostsScreen/PostsScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';
import mainTab from './variables/mainTab';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const AuthStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      {!isAuth && (
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name='registration'
          >
            {() => <RegistrationScreen setIsAuth={setIsAuth} />}
          </AuthStack.Screen>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name='login'
          >
            {() => <LoginScreen setIsAuth={setIsAuth} />}
          </AuthStack.Screen>
        </AuthStack.Navigator>
      )}

      {isAuth && (
        <MainTab.Navigator
          initialRouteName='posts'
          // screenOptions={mainTabs.screenOptions}
          screenOptions={mainTab.screenOptions}
        >
          {/*<MainTab.Screen name='home' component={HomeScreen}/>*/}

          <MainTab.Screen
            name='posts'
            component={PostsScreen}
            options={mainTab.options.getPosts(setIsAuth)}
          />

          <MainTab.Screen
            name='create'
            options={({navigation}) => (mainTab.options.getPostCreation(navigation))}
          >
            {() => <CreatePostsScreen
              imgUrl={require('./assets/images/posts/img01.jpg')}
              // imgUrl={false}
            />}
          </MainTab.Screen>
          <MainTab.Screen
            name='profile'
            // component={ProfileScreen}
            options={mainTab.options.profile}
          >
            {() => <ProfileScreen setIsAuth={setIsAuth}/>}
          </MainTab.Screen>
          {/*<MainTab.Screen name='map' component={MapScreen}/>*/}
        </MainTab.Navigator>
      )}

    </NavigationContainer>
  );
}
