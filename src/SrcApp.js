import {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen/LoginScreen';
import MapScreen from './screens/otherScreens/MapScreen/MapScreen';
import CommentsScreen from './screens/otherScreens/CommentsScreen/CommentsScreen';
import MainTabNav from './Routing/MainTabNav';
import {fontFamily} from './variables/fontFamily';
import LeftNavArrow from './components/LeftNavArrow/LeftNavArrow';
import KeyboardContainer from './components/KeyboardContainer/KeyboardContainer';
// import Home from './screens/mainScreen/HomeScreen';

export default function SrcApp() {
  const [isAuth, setIsAuth] = useState(false);

  const AuthStack = createStackNavigator();
  const OtherStack = createStackNavigator();

  return (
    <KeyboardContainer>
      <NavigationContainer>

        {!isAuth && (
          <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name='registration'>
              {(props) => <RegistrationScreen {...props} setIsAuth={setIsAuth}/>}
            </AuthStack.Screen>

            <AuthStack.Screen name='login'>
              {(props) => <LoginScreen {...props} setIsAuth={setIsAuth}/>}
            </AuthStack.Screen>
          </AuthStack.Navigator>
        )}

        {isAuth && (
          <OtherStack.Navigator screenOptions={mainOptions}>
            {/*<OtherStack.Screen*/}
            {/*  name='homeTest'*/}
            {/*  component={Home}*/}
            {/*  // options={{title: 'Мапа'}}*/}
            {/*/>*/}
            <OtherStack.Screen
              name='home'
              options={{headerShown: false}}
            >
              {props => <MainTabNav {...props} setIsAuth={setIsAuth}/>}
            </OtherStack.Screen>
            <OtherStack.Screen
              name='map'
              component={MapScreen}
              options={{title: 'Мапа'}}
            />
            <OtherStack.Screen
              name='comments'
              component={CommentsScreen}
              options={{title: 'Коментарі'}}
            />
          </OtherStack.Navigator>
        )}

      </NavigationContainer>
    </KeyboardContainer>
  );
}

const mainOptions = {
  headerTitleAlign: 'center',
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: fontFamily.roboto500,
    fontSize: 17,
    lineHeight: 22,
  },
  headerStyle: {
    height: 88,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  headerLeft: (props) => <LeftNavArrow {...props}/>
};
