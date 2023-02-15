import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../variables/fontFamily';
import PostCard from '../../../components/PostCard/PostCard';
import data from '../../../data';

const { postList } = data;

export default function PostsScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{
        paddingHorizontal: 16,
        paddingVertical: 32,
        backgroundColor: '#ffffff',
      }}>
        <View style={[st.userCard, { marginBottom: 32 }]}>
          <Image style={st.image} source={require('../../../assets/images/avatar.png')} />
          <View style={st.userCardContent}>
            <Text style={st.userCardName}>Natali Romanova</Text>
            <Text style={st.userCardEmail}>email@example.com</Text>
          </View>
        </View>

        <View>
          {postList.map((it) => (
            <View key={it.id} style={{ marginBottom: 10 }}>
              <PostCard
                title={it.title}
                likeCount={it.likeCount}
                messageCount={it.messageCount}
                imgUrl={it.imgUrl}
                location={it.location}
              />
            </View>
          ))}
          {/*<View style={{ height: 50 }} />*/}
        </View>
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
  userCardContent: {},
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
