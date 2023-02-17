import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import Btn from '../../../components/Btn/Btn';
import { authStyles as s } from '../auth.styles';
import Avatar from '../../../components/Avatar/Avatar';
import { useKeyboardShow } from '../../../hooks/useKeyboardShow';
import KeyboardContainer from '../../../components/KeyboardContainer/KeyboardContainer';
import { commonStyle } from '../../../styles/commonStyle';

const initValues = { email: '', password: '', nickname: '' };
const initFocus = { email: false, password: false, nickname: false };

export default function RegistrationScreen({ setIsAuth, navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [hasFocus, setHasFocus] = useState(initFocus);
  const [isEmptyAvatar, setIsEmptyAvatar] = useState(true);


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

  return (
    <KeyboardContainer>
      <ImageBackground style={st.bg} source={require('../../../assets/images/bg.jpg')}>
        <View
          style={[st.inner, { paddingBottom: isShowKeyboard ? 32 : 78 }]}
        >

          <View style={st.avatarWrapper}>
            <View style={st.avatar}>
              <Avatar isEmpty={isEmptyAvatar} onClickBtn={setIsEmptyAvatar} />
            </View>
          </View>

          <Text style={[commonStyle.title, {marginBottom: 32}]}>Реєстрація</Text>
          <View style={[s.inputWrapper, hasFocus.nickname && s.inputWrapperFocus,
            { marginBottom: 16 }]}>
            <TextInput
              style={s.input}
              placeholder='Логін'
              onChangeText={v => onChangeText(v, 'nickname')}
              onFocus={() => onInputFocus('nickname')}
              onBlur={() => onInputBlur('nickname')}
            />
          </View>
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
          <View
            style={[s.inputWrapper, hasFocus.password && s.inputWrapperFocus, { marginBottom: isShowKeyboard ? 0 : 43 }]}
          >
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
              <TouchableOpacity
                style={s.btnInput}
                activeOpacity={0.5}
                onPress={() => setIsShowPassword(p => !p)}
              >
                <Text style={s.btnInputText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          {!isShowKeyboard && (
            <>
              <View style={{ marginBottom: 16 }}>
                <Btn onPress={() => {
                  console.log(values);
                  setIsAuth(true);
                }} text='Зареєструватись' />
              </View>

              <Text style={s.text}>
                Вже є акаунт? <Text onPress={() => navigation.navigate('login')}>Увійти</Text>
              </Text>
            </>
          )}
        </View>
      </ImageBackground>
    </KeyboardContainer>
  )
  ;
}

const st = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  inner: {
    position: 'relative',
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
  },
});

