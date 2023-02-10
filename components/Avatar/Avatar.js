import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import AddIcon from '../svg/AddIcon/AddIcon';
import DeleteIcon from '../svg/DeleteIcon/DeleteIcon';

export default function Avatar({ isEmpty, onClickBtn }) {
  const onPressBtn = () => {
    onClickBtn(!isEmpty);
  };

  return (
    <View style={st.container}>
      {!isEmpty && <Image style={st.img} source={require('../../assets/images/avatar.png')} />}
      <TouchableOpacity style={st.btn} onPress={onPressBtn}>
        {isEmpty ? <AddIcon /> : <DeleteIcon />}
      </TouchableOpacity>
    </View>
  );
}


const st = StyleSheet.create({
  container: {
    position: 'relative',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  img: {
    // position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  btn: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
});
