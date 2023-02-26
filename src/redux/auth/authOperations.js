import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authSlice } from './authSlice';
import { auth } from '../../firebase/config';
import {postsSlice} from '../posts/postsSlice';

const authLogin = ({ email, password }) =>
  async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log('user.user::', user.user);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.user.uid,
          nickName: user.user.displayName,
          userEmail: user?.user?.email,
          userAvatar: user?.user?.photoURL,
        })
      );
      dispatch(authSlice.actions.authCurrentUser(true));
    } catch (error) {
      console.log(error);
    }
  };

const authRegister = ({ email, password, nickname, photoURL }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: nickname,
        photoURL,
      });
      const userSuccess = auth.currentUser;
      // console.log('userSuccess::', userSuccess);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: userSuccess.uid,
          nickName: userSuccess.displayName,
          userEmail: userSuccess.email,
          userAvatar: userSuccess.photoURL,
        })
      );
      dispatch(authSlice.actions.authCurrentUser(true));
      console.log(userSuccess);
    } catch (error) {
      console.log(error);
    }
  };

const authUpdateAvatar = (photoURL) => async (dispatch) => {
  try {
    await updateProfile(auth.currentUser, {
      photoURL,
    });
    console.log('photoURL', photoURL);
    const userSuccess = auth.currentUser;
    dispatch(
      authSlice.actions.updateUserAvatar({
        userAvatar: userSuccess.photoURL,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

const authLogout = () => async (dispatch) => {
  await signOut(auth);
  dispatch(authSlice.actions.authLogOut());
  dispatch(postsSlice.actions.reset());
};

const authCurrentUser = () => async (dispatch) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
          userEmail: user?.email,
        })
      );
      dispatch(authSlice.actions.authCurrentUser(true));
    }
  });
};

const authOperations = {
  authLogin,
  authRegister,
  authLogout,
  authCurrentUser,
  authUpdateAvatar,
};

export default authOperations;
