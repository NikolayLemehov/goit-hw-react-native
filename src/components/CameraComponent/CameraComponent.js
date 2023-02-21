import { Camera } from 'expo-camera';
import {useRef} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import CameraBtn from '../../components/CameraBtn/CameraBtn';

export default function CameraComponent({ photoUri, setPhotoUri}) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    setPhotoUri(photo.uri);
  };


  return (
    <View style={styles.container} onPress={() => console.log('my press')}>
      <Camera
        style={styles.camera}
        // type={type}
        ref={cameraRef}
      >
        {photoUri &&
          <View style={styles.preview}>
            <Image source={{uri: photoUri}} style={{width: 50, height: 50}}/>
          </View>
        }
        <View
          style={styles.buttonContainer}
        >
          <CameraBtn
            // isEdit={!!imgUrl}
            isEdit={true}
            onPress={takePhoto}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
    position: 'relative',
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
