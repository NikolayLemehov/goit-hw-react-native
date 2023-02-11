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
import { useKeyboardShow } from '../../../hooks/useKeyboardShow';

const initValues = { email: '', password: '' };
const initFocus = { email: false, password: false };

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [hasFocus, setHasFocus] = useState(initFocus);
  const { isReady, onLayoutRootView } = useFont();
  const onChangeText = (value, name) => {
    setValues(v => ({ ...v, [name]: value }));
  };

  const onInputFocus = (name) => {
    setIsShowKeyboard(true);
    setHasFocus(p => ({ ...p, [name]: true }));
  };

  const onInputBlur = (name) => {
    setHasFocus(p => ({ ...p, [name]: false }));
  };

  if (!isReady) {
    return null;
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground style={styles.bg} source={require('../../../assets/images/bg.jpg')}>
              <View style={[styles.inner, { paddingBottom: isShowKeyboard ? 32 : 144 }]}>
                <Text style={s.title}>Увійти</Text>
                <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, { marginBottom: 16 }]}>
                  <TextInput
                    style={s.input}
                    autoComplete='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='Адреса електроної пошти'
                    onChangeText={v => onChangeText(v, 'email')}
                    onFocus={() => onInputFocus('email')}
                    onBlur={() => onInputBlur('email')}
                  />
                </View>
                <View style={[s.inputWrapper, hasFocus.password && s.inputWrapperFocus,
                  { marginBottom: isShowKeyboard ? 0 : 43 }]}>
                  <View style={{ flex: 4 }}>
                    <TextInput
                      style={s.input}
                      secureTextEntry={!isShowPassword}
                      placeholder='Пароль'
                      onChangeText={v => onChangeText(v, 'password')}
                      onFocus={() => onInputFocus('password')}
                      onBlur={() => onInputBlur('password')}
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={s.btnInput}>
                      <Text style={s.btnInputText} onPress={() => setIsShowPassword(p => !p)}>Показати</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {!isShowKeyboard && (
                  <>
                    <View style={{ marginBottom: 16 }}>
                      <Btn onPress={() => {
                        console.log(values);
                      }} text='Войти' />
                    </View>

                    <Text style={s.text}>
                      Немає акаунта? <Text onPress={() => navigation.navigate('registration')}>Зареєструватись</Text>
                    </Text>
                  </>
                )}
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
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
