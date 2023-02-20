import {mainTab} from '../variables/mainTab';
import PostsScreen from '../screens/mainScreen/PostsScreen/PostsScreen';
import CreatePostsScreen from '../screens/mainScreen/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../screens/mainScreen/ProfileScreen/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function MainTabNav({setIsAuth}) {
  const MainTab = createBottomTabNavigator();

  return (
    <MainTab.Navigator
      initialRouteName='posts'
      // screenOptions={mainTabs.screenOptions}
      screenOptions={mainTab.screenOptions}
    >

      <MainTab.Screen
        name='posts'
        component={PostsScreen}
        options={mainTab.options.getPosts(setIsAuth)}
      />

      <MainTab.Screen
        name='create'
        options={({navigation}) => (mainTab.options.getPostCreation(navigation))}
      >
        {(props) => <CreatePostsScreen
          {...props}
          imgUrl={require('../assets/images/posts/img01.jpg')}
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
    </MainTab.Navigator>
  );
}
