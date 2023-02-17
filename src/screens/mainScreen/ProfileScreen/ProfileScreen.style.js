import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },
  inner: {
    position: 'relative',
    flex: 1,
    marginTop: 147,
    paddingTop: 92,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
  },
  exitBtn: {
    position: 'absolute',
    right: 0,
    top: 6,
    // alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // marginBottom: 30,
  },
});
