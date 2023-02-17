import { Keyboard } from 'react-native';
import { useEffect, useState } from 'react';

export const useKeyboardShow = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return [isShowKeyboard, setIsShowKeyboard];
};
