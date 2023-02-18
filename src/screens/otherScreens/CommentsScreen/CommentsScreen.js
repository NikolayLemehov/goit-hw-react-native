import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style as s} from './CommentsScreen.style';
import {postList} from '../../../data/postList';
import RoundUpIcon from '../../../components/svg/RoundUp';

export default function CommentsScreen() {
  return (
    <View style={s.container}>
      <FlatList
        style={{paddingHorizontal: 16}}
        data={postList[1].comments}
        ListHeaderComponent={
          <View style={{paddingVertical: 32}}>
            <Image
              style={s.image}
              source={postList[1].imgUrl}
            />
          </View>}
        renderItem={({item}) => (
          <View style={[s.containerItem, {flexDirection: item.isOwner ? 'row-reverse' : 'row'}]}>
            <Image
              source={item.ownerAvatar}
              style={[s.authorAvatar, {[item.isOwner ? 'marginLeft' : 'marginRight']: 16}]}
            />
            <View
              style={[s.commentWrapper, {[item.isOwner ? 'borderTopRightRadius' : 'borderTopLeftRadius']: 16}]}
            >
              <Text style={s.commentAuthor}>{item.text}</Text>
              <Text style={[s.commentDate, {textAlign: item.isOwner ? 'left' : 'right'}]}>
                {item.date}
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 24 }}/>}
        ListEmptyComponent={<View style={{
          height: 50,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}><Text>У вас ще не має коментарів</Text></View>}
        ListFooterComponent={() => <View style={{ height: 30 }}/>}
      />
      <View
        style={s.containerFooter}
      >
        <View>
          <TextInput
            // value={}
            // onChangeText={}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            style={s.commentInput}
          />
          <TouchableOpacity
            style={s.iconWrapper}
            // onPress={}
            activeOpacity={0.7}
          >
            <RoundUpIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
