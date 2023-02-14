import { StyleSheet } from 'react-native';
import { fontFamily } from '../../variables/fontFamily';

export const s = StyleSheet.create({
  container: {
  },
  image: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 8,
    fontFamily: fontFamily.roboto500,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sentence: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  sentenceText: {
    marginLeft: 4,
    fontFamily: fontFamily.roboto400,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  sentenceTextInactive: {
    color: '#BDBDBD',
  },
})
