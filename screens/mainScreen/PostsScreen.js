import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../variables/fontFamily';
import PostCard from '../../components/PostCard/PostCard';

const postList = [
  {messageCount: 0},
  {messageCount: 9},
  {messageCount: 1},
]

export default function PostsScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 32,
        // marginBottom: 51,
        backgroundColor: '#ffffff',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <View style={[st.userCard, {marginBottom: 32}]}>
        <Image style={st.image} source={require('../../assets/images/avatar.png')} />
        <View style={st.userCardContent}>
          <Text style={st.userCardName}>Natali Romanova</Text>
          <Text style={st.userCardEmail}>email@example.com</Text>
        </View>
      </View>

      <View>
        {postList.map((it, i) => (
          <View key={i} style={{marginBottom: 10}}>
            <PostCard
              messageCount={it.messageCount}
            />
          </View>
        ))}
        <View style={{height: 50}}/>
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userCardContent: {

  },
  userCardName: {
    fontFamily: fontFamily.roboto700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userCardEmail: {
    fontFamily: fontFamily.roboto400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});
