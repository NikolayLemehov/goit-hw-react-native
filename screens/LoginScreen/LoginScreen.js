import {
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import Btn from '../../components/Btn/Btn';

export default function LoginScreen() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
          'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={s.container} onLayout={onLayoutRootView}>
          <ImageBackground style={s.bg} source={require('../../assets/images/bg.jpg')}>
            <View style={s.inner}>
              <Text style={s.title}>Войти</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <View style={[s.inputWrapper, { marginBottom: 16 }]}>
                  <TextInput style={s.input} placeholder='Адрес электронной почты' />
                </View>
              </KeyboardAvoidingView>

              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <View style={[s.inputWrapper, { marginBottom: 32 }]}>
                  <View style={{ flex: 4 }}>
                    <TextInput style={s.input} placeholder='Пароль' />
                  </View>
                  <View>
                    <TouchableOpacity style={s.btnInput}>
                      <Text style={s.btnInputText}>Показать</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>

              <View style={{ marginBottom: 16 }}><Btn /></View>


              <Text style={s.text}>Нет аккаунта? Зарегистрироваться</Text>
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
