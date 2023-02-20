import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../variables/fontFamily';
import PostCard from '../../../components/PostCard/PostCard';
// import data from '../../../data';
import {useContext, useEffect} from 'react';
import uuid from 'react-native-uuid';
import {postsCtx} from '../../../context/PostsCtx';

// const { postList } = data;

export default function PostsScreen({route}) {
  // const [posts, setPosts] = useState(postList);
  const {posts, setPosts} = useContext(postsCtx);

  useEffect(() => {
    if (!route.params) return;
    const data = route.params.newPost;
    const id = uuid.v4();
    const newPost = {
      id,
      title: data.title,
      messageCount: 0,
      likeCount: 0,
      imgUri: data.photoUri,
      location: data.place,
      locationData: { latitude: data.placeLocation.latitude, longitude: data.placeLocation.longitude },
      comments: []
    };
    setPosts(p => [newPost, ...p]);
  }, [route.params, setPosts]);


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
          {posts.map((it) => (
            <View key={it.id} style={{ marginBottom: 10 }}>
              <PostCard
                title={it.title}
                likeCount={it.likeCount}
                imgUrl={it.imgUrl}
                imgUri={it.imgUri}
                location={it.location}
                locationData={it.locationData}
                comments={it.comments}
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
