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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[{flex: 1}, style]} onLayout={onLayoutRootView}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}