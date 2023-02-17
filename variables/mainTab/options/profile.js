import UserIcon from '../../../components/svg/UserIcon';

export const profile = {
  title: 'Профайл',
  headerShown: false,
  tabBarIcon: ({ color, size }) => (
    <UserIcon color={color} size={size} />
  ),
};