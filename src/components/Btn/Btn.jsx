import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../variables/colors';

export default function Btn({ onPress, text, disabled }) {
  const onPressBtn = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={[s.btn, disabled && s.btnDisabled]}
      onPress={onPressBtn}
    >
      <Text
        style={[s.text, disabled && s.textDisabled]}
      >{text}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    // flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: colors.active,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
  text: {
    // flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
    color: '#ffffff',
    // justifyContent: 'center',
  },
  textDisabled: {
    color: '#BDBDBD',
  }
});
