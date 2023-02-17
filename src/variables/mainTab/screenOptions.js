import {fontFamily} from '../fontFamily';

export const screenOptions = {
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
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#1B4371',
  tabBarStyle: {
    height: 83,

    paddingHorizontal: 81, // TODO universal for any screen width

    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#b3b3b3',
  },
};
