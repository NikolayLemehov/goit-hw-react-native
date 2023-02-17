import NewPostIcon from '../../../components/svg/NewPostIcon';
import LeftNavArrow from '../../../components/LeftNavArrow/LeftNavArrow';

export const getPostCreation = () => ({
  title: 'Створити публікацію',
  headerLeft: (props) => <LeftNavArrow {...props}/>,
  tabBarStyle: { display: 'none' },
  tabBarShowLabel: false,
  tabBarLabel: false,
  tabBarIcon: ({ color, size }) => (
    <NewPostIcon color={color} size={size} />
  ),
});
