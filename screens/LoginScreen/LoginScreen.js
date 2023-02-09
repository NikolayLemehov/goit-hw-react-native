import {
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useState } from 'react';
import Btn from '../../components/Btn/Btn';
import { useFont } from '../../hooks/useFont';

const initValues = {email: '', password: ''};
const initFocus = {email: false, password: false};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [hasFocus, setHasFocus] = useState(initFocus);
  const {isReady, onLayoutRootView} = useFont();

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!isReady) {
    return null;
  }
  const onChangeText = (value, name) => {
    setValues(v => ({...v, [name]: value}))
  }

  const onInputFocus = (name) => {
    setIsShowKeyboard(true);
    setHasFocus(p => ({...p, [name]: true}))
  };

  const onInputBlur = (name) => {
    setHasFocus(p => ({...p, [name]: false}))
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={s.container} onLayout={onLayoutRootView}>
          <ImageBackground style={s.bg} source={require('../../assets/images/bg.jpg')}>
            <View style={[s.inner, { paddingBottom: isShowKeyboard ? 20 : 144 }]}>
              <Text style={s.title}>Войти</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, { marginBottom: 16 }]}>
                  <TextInput
                    style={s.input}
                    autoComplete='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='Адрес электронной почты'
                    onChangeText={v => onChangeText(v, 'email')}
                    onFocus={() => onInputFocus('email')}
                    onBlur={() => onInputBlur('email')}
                  />
                </View>
                <View style={[s.inputWrapper, hasFocus.password && s.inputWrapperFocus, { marginBottom: 32 }]}>
                  <View style={{ flex: 4 }}>
                    <TextInput
                      style={s.input}
                      secureTextEntry={isShowPassword}
                      placeholder='Пароль'
                      onChangeText={v => onChangeText(v, 'password')}
                      onFocus={() => onInputFocus('password')}
                      onBlur={() => onInputBlur('password')}
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={s.btnInput}>
                      <Text style={s.btnInputText} onPress={() => setIsShowPassword(p => !p)}>Показать</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Btn onPress={() => {
                    hideKeyboard();
                    console.log(values)
                  }} text='Войти'/>
                </View>

                <Text style={s.text}>Нет аккаунта? Зарегистрироваться</Text>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  inner: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    padding: 16,
  },
  title: {
    paddingBottom: 32,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
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
    padding: 10,
    paddingRight: 16,
  },
  btnInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
