import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../variables/fontFamily';
import PostCard from '../../../components/PostCard/PostCard';
import {useEffect} from 'react';
import KeyboardContainer from '../../../components/KeyboardContainer/KeyboardContainer';
import postOperation from '../../../redux/posts/postsOperation';
import {useDispatch, useSelector} from 'react-redux';
import postsSelectors from '../../../redux/posts/postsSelectors';
import authSelectors from '../../../redux/auth/authSelectors';

export default function PostsScreen() {
  const posts = useSelector(postsSelectors.getPosts);
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postOperation.getAllPosts());
  }, [dispatch]);

  return (
    <KeyboardContainer>
      <ScrollView style={{ flex: 1 }}>
        <View style={{
          paddingHorizontal: 16,
          paddingVertical: 32,
          backgroundColor: '#ffffff',
        }}>
          <View style={[st.userCard, { marginBottom: 32 }]}>
            <Image style={st.image} source={require('../../../assets/images/avatar.png')} />
            <View style={st.userCardContent}>
              <Text style={st.userCardName}>{user.nickName}</Text>
              <Text style={st.userCardEmail}>{user.userEmail}</Text>
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
    </KeyboardContainer>
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
