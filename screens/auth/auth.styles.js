import { StyleSheet } from 'react-native';


// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 19px;
// color: #212121;

export const authStyles = StyleSheet.create({
  input: {
    padding: 16,
    paddingVertical: 11,
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  title: {
    paddingBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputWrapperFocus: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
  },
  btnInput: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  btnInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
