import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function PasswordInput({style, isShowPassword, onChangeText, setIsShowKeyboard, setIsShowPassword}) {
  const [hasFocus, setHasFocus] = useState(false);

  const onFocus = () => {
    setIsShowKeyboard(true);
    setHasFocus(true);
  }

  const onBlur = () => {
    setHasFocus(false);
  }

  return (
    <>
      <View style={[s.inputWrapper, hasFocus && s.inputWrapperFocus, style]}>
        <View style={{ flex: 4 }}>
          <TextInput
            style={s.input}
            secureTextEntry={isShowPassword}
            placeholder='Пароль'
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>
        <View>
          <TouchableOpacity style={s.btnInput}>
            <Text style={s.btnInputText} onPress={() => setIsShowPassword(p => !p)}>Показать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const s = StyleSheet.create({
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
  input: {
    padding: 16,
  },
  btnInput: {
    padding: 10,
    paddingRight: 16,
  },
  btnInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
})
