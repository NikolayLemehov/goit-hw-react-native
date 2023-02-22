import * as Location from 'expo-location';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style as s } from './CreatePostsScreen.style';
import MapPinIcon from '../../../components/svg/MapPinIcon';
import Btn from '../../../components/Btn/Btn';
import TrashIcon from '../../../components/svg/TrashIcon';
import {useEffect, useState} from 'react';
import {useKeyboardShow} from '../../../hooks/useKeyboardShow';
import CameraComponent from '../../../components/CameraComponent/CameraComponent';
import KeyboardContainer from '../../../components/KeyboardContainer/KeyboardContainer';
import uploadPhotoToServer from '../../../api/uploadPhotoToServer';
import uuid from 'react-native-uuid';
import postOperation from '../../../redux/posts/postsOperation';
import {useDispatch} from 'react-redux';

const initValues = { title: '', place: ''};

export default function CreatePostsScreen({ imgUrl, navigation }) {
  const [photoUri, setPhotoUri] = useState('');
  const [values, setValues] = useState(initValues);
  const {isShowKeyboard} = useKeyboardShow();
  const [placeLocation, setPlaceLocation] = useState(null);
  const dispatch = useDispatch();


  const onChangeText = (value, name) => {
    setValues(v => ({ ...v, [name]: value }));
  };

  const sendPost = async () => {
    const photoUrl = await uploadPhotoToServer(photoUri);
    const data = {...values, photoUri: photoUrl, placeLocation, createdAt: Date.now()};

    const newPost = {
      id: uuid.v4(),
      title: data.title,
      messageCount: 0,
      likeCount: 0,
      imgUri: data.photoUri,
      location: data.place,
      locationData: {
        latitude: data?.placeLocation?.latitude ?? 0,
        longitude: data?.placeLocation?.longitude ?? 0,
      },
      comments: []
    };
    dispatch(postOperation.uploadPostToServer(newPost));

    navigation.navigate('posts');
  };

  const onPressReset =  () => {
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
    <KeyboardContainer>
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
    </KeyboardContainer>
  );
}
