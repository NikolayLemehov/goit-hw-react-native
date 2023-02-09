import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Btn({onPress}) {
  return (
    <>
      <View>
      <TouchableOpacity style={s.btn} onPress={onPress}>
        <Text style={s.text}>Показать</Text>
      </TouchableOpacity>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  btn: {
    // flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    // flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
    color: '#ffffff'
    // justifyContent: 'center',
  },
});

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 19px;
// /* identical to box height */
//
// text-align: center;
//
// /* White */
// border-radius: 100px;
// color: #FFFFFF;
