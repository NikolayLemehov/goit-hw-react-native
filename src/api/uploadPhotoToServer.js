import { nanoid } from 'nanoid';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { getStorage } from 'firebase/storage';
import app from '../firebase/config';

export default async function uploadPhotoToServer(image) {
  const storage = getStorage(app);
  try {
    const res = await fetch(image);
    const file = await res.blob();

    const uniqueID = nanoid();
    const storageRef = ref(storage, `postImage/post_${uniqueID}`);
    await uploadBytes(storageRef, file);

    // get url
    const postImageUrl = await getDownloadURL(storageRef);
    return postImageUrl;
  } catch (error) {
    console.log(error.message);
  }
}
