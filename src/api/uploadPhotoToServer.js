import uuid from 'react-native-uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {storage} from '../firebase/config';

export default async function uploadPhotoToServer(image) {
  try {
    const res = await fetch(image);

    const file = await res.blob();

    const uniqueID = uuid.v4();
    const storageRef = ref(storage, `postImage/post_${uniqueID}`);
    await uploadBytes(storageRef, file);

    // get url
    const postImageUrl = await getDownloadURL(storageRef);
    return postImageUrl;
  } catch (error) {
    console.log('uploadPhotoToServer::', error.message);
  }
}
