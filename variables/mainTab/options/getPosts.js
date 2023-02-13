import { TouchableOpacity } from 'react-native';
import LogOutIcon from '../../../components/svg/LogOutIcon';
import GridIcon from '../../../components/svg/GridIcon';

export const getPosts = (setIsAuth) => ({
  title: 'Публікації',
  headerRight: (props) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setIsAuth(false);
          // console.log(props);
        }}
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}>
        <LogOutIcon {...props}/>
      </TouchableOpacity>
    );
  },
  tabBarIcon: ({ color, size }) => (
    <GridIcon color={color} size={size} />
  ),
})