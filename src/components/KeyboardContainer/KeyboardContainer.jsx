import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { useFont } from '../../hooks/useFont';

export default function KeyboardContainer({ children, style = {} }) {
  const { isReady, onLayoutRootView } = useFont();

  if (!isReady) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={[{flex: 1}, style]} onLayout={onLayoutRootView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}
