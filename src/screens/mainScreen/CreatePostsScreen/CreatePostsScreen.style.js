import { StyleSheet } from 'react-native';
import { fontFamily } from '../../../variables/fontFamily';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 32,
    paddingBottom: 42,
    paddingHorizontal: 16,
  },
  imgWrapper: {
    position: 'relative',
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  img: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imgText: {
    fontFamily: fontFamily.roboto400,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  cameraBtnWrapper: {
    position: 'absolute',
    zIndex: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: fontFamily.roboto400,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  inputIcon: {
    marginRight: 4,
  },
});
