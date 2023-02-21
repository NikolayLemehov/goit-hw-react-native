import * as Location from 'expo-location';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style as s } from './CreatePostsScreen.style';
import MapPinIcon from '../../../components/svg/MapPinIcon';
import Btn from '../../../components/Btn/Btn';
import TrashIcon from '../../../components/svg/TrashIcon';
import {useEffect, useState} from 'react';
import {useKeyboardShow} from '../../../hooks/useKeyboardShow';
import CameraComponent from '../../../components/CameraComponent/CameraComponent';


const initValues = { title: '', place: ''};

export default function CreatePostsScreen({ imgUrl, navigation }) {
  const [photoUri, setPhotoUri] = useState('');
  const [values, setValues] = useState(initValues);
  const [isShowKeyboard] = useKeyboardShow();
  const [placeLocation, setPlaceLocation] = useState(null);


  const onChangeText = (value, name) => {
    setValues(v => ({ ...v, [name]: value }));
  };

  const sendPost = () => {
    const result = {...values, photoUri, placeLocation};
    navigation.navigate('posts', {newPost: result});
  };

  const onPressReset = () => {
    setValues(initValues);
    setPhotoUri('');
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPlaceLocation(coords);
    })();
  }, []);



  return (
    <View style={s.container}>
      <View style={{ marginBottom: 32 }}>
        {isShowKeyboard
          ?
          <View>
            {photoUri
              ? <Image style={{width: 50, height: 50}} source={{uri: photoUri}}/>
              : <Text>Фото поки ще не зроблено</Text>
            }
          </View>
          :
          <>
            <View style={[s.imgWrapper, { marginBottom: 8 }]}>
              <CameraComponent
                photoUri={photoUri}
                setPhotoUri={setPhotoUri}
              />
            </View>
            <Text style={s.imgText}>{imgUrl ? 'Редагувати' : 'Завантажте'} фото</Text>
          </>
        }
      </View>
      <View style={[s.inputWrapper, { marginBottom: 16 }]}>
        <TextInput
          style={s.input}
          placeholder='Назва...' // TODO make roboto 400
          placeholderTextColor='#BDBDBD'
          value={values.title}
          onChangeText={v => onChangeText(v, 'title')}
        />
      </View>
      <View style={[s.inputWrapper, { marginBottom: 32 }]}>
        <MapPinIcon style={s.inputIcon} />
        <TextInput
          style={s.input}
          placeholder='Місцевість...'
          placeholderTextColor='#BDBDBD'
          value={values.place}
          onChangeText={v => onChangeText(v, 'place')}
        />
      </View>
      <Btn
        onPress={sendPost}
        text='Опублікувати'
        // disabled
      />
      <TouchableOpacity
        style={{marginTop: 'auto', alignSelf: 'center'}}
        activeOpacity={0.7}
        onPress={onPressReset}
      >
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
}
