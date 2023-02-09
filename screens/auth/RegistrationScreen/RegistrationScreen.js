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
import Btn from '../../../components/Btn/Btn';
import { useFont } from '../../../hooks/useFont';
import { authStyles as s } from '../auth.styles';

const initValues = {email: '', password: '', nickname: ''};
const initFocus = {email: false, password: false, nickname: false};

export default function RegistrationScreen() {
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
        <View style={st.container} onLayout={onLayoutRootView}>
          <ImageBackground style={st.bg} source={require('../../../assets/images/bg.jpg')}>
            <View style={[st.inner, { paddingBottom: isShowKeyboard ? 20 : 144 }]}>
              <Text style={s.title}>Регистрация</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, { marginBottom: 16 }]}>
                  <TextInput
                    style={s.input}
                    placeholder='Логин'
                    onChangeText={v => onChangeText(v, 'email')}
                    onFocus={() => onInputFocus('email')}
                    onBlur={() => onInputBlur('email')}
                  />
                </View>
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

const st = StyleSheet.create({
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
});

