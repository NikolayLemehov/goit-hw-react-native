import {StyleSheet} from 'react-native';
import {fontFamily} from '../../../variables/fontFamily';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },

  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  commentWrapper: {
    flex: 1,
    padding: 16,

    backgroundColor: ' rgba(0, 0, 0, 0.03)',
    borderRadius: 16,
  },
  commentAuthor: {

    marginBottom: 8,

    fontFamily: fontFamily.roboto400,
    fontSize: 13,
    lineHeight: 18,

    color: '#212121',
  },
  commentDate: {
    fontFamily: fontFamily.roboto400,
    fontSize: 10,
    lineHeight: 12,

    color: '#BDBDBD',
  },

  containerFooter: {
    paddingHorizontal: 16,
    paddingBottom: 16,

    backgroundColor: '#FFFFFF',
  },
  commentInput: {
    position: 'relative',

    fontFamily: fontFamily.inter500,
    height: 50,
    padding: 16,
    paddingRight: 50,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: '#F6F6F6',
    color: '#212121',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
  },
  iconWrapper: {
    position: 'absolute',
    right: 8,
    bottom: 8,

    width: 34,
    height: 34,
  },
});
