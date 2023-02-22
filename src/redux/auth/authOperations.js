import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authSlice } from './authSlice';
import { auth } from '../../firebase/config';

const authLogin =
  ({ email, password }) =>
    async (dispatch) => {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        // console.log(user.user);
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.user.uid,
            nickName: user.user.displayName,
            userEmail: user?.user?.email,
          })
        );
        dispatch(authSlice.actions.authCurrentUser(true));
      } catch (error) {
        console.log(error);
      }
    };

const authRegister =
  ({ email, password, nickname }) =>
    async (dispatch) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: nickname,
        });
        const userSuccess = auth.currentUser;
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: userSuccess.uid,
            nickName: userSuccess.displayName,
            userEmail: userSuccess.email,
          })
        );
        dispatch(authSlice.actions.authCurrentUser(true));
        console.log(userSuccess);
      } catch (error) {
        console.log(error);
      }
    };

const authLogout = () => async (dispatch) => {
  await signOut(auth);
  dispatch(authSlice.actions.authLogOut());
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
};

export default authOperations;
