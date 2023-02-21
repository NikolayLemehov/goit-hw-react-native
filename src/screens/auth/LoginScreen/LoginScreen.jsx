import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import Btn from '../../../components/Btn/Btn';
import {authStyles as s} from '../auth.styles';
import {useKeyboardShow} from '../../../hooks/useKeyboardShow';
import {commonStyle} from '../../../styles/commonStyle';
import KeyboardContainer from '../../../components/KeyboardContainer/KeyboardContainer';

const initValues = {email: '', password: ''};
const initFocus = {email: false, password: false};

export default function LoginScreen({setIsAuth, navigation}) {
  const {isShowKeyboard, setIsShowKeyboard} = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [hasFocus, setHasFocus] = useState(initFocus);
  const onChangeText = (value, name) => {
    setValues(v => ({...v, [name]: value}));
  };

  const onInputFocus = (name) => {
    setIsShowKeyboard(true);
    setHasFocus(p => ({...p, [name]: true}));
  };

  const onInputBlur = (name) => {
    setHasFocus(p => ({...p, [name]: false}));
  };

  return (
    <KeyboardContainer>
      <ImageBackground style={styles.bg} source={require('../../../assets/images/bg.jpg')}>
        <View style={[styles.inner, {paddingBottom: isShowKeyboard ? 32 : 144}]}>
          <Text style={[commonStyle.title, {marginBottom: 32}]}>Увійти</Text>
          <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, {marginBottom: 16}]}>
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
            {marginBottom: isShowKeyboard ? 0 : 43}]}>
            <View style={{flex: 4}}>
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
                onPress={() => setIsShowPassword(p => !p)}
              >
                <Text style={s.btnInputText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          {!isShowKeyboard && (
            <>
              <View style={{marginBottom: 16}}>
                <Btn
                  onPress={() => {
                    console.log(values);
                    setIsAuth(true);
                  }}
                  text='Войти'
                />
              </View>

              <Text style={s.text}>
              Немає акаунта? <Text onPress={() => navigation.navigate('registration')}>Зареєструватись</Text>
              </Text>
            </>
          )}
        </View>
      </ImageBackground>
    </KeyboardContainer>
  );
}

const styles = StyleSheet.create({
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
