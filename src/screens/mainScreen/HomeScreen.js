import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/*<View style={st.header}>Публікації</View>*/}
      <Text>HomeScreen</Text>
    </View>
  );
}

// const st = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 88,
//     paddingTop: 32,
//     paddingHorizontal: 16,
//     paddingBottom: 144,
//     backgroundColor: '#ffffff',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   },
// });
