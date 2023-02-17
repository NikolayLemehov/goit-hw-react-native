import { TouchableOpacity } from 'react-native';
import ArrowLeftIcon from '../../../components/svg/ArrowLeftIcon';
import NewPostIcon from '../../../components/svg/NewPostIcon';

export const getPostCreation = (navigation) => ({
  title: 'Створити публікацію',
  headerLeft: (props) => {
    // console.log(props)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack(); // TODO return to prev screen
        }}
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}>
        <ArrowLeftIcon {...props}/>
      </TouchableOpacity>
    );
  },
  tabBarStyle: { display: 'none' },
  tabBarShowLabel: false,
  tabBarLabel: false,
  tabBarIcon: ({ color, size }) => (
    <NewPostIcon color={color} size={size} />
  ),
});