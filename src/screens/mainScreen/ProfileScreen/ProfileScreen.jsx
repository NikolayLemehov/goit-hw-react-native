import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { style as s } from './ProfileScreen.style';
import Avatar from '../../../components/Avatar/Avatar';
import {useState} from 'react';
import LogOutIcon from '../../../components/svg/LogOutIcon';
import { commonStyle } from '../../../styles/commonStyle';
import PostCard from '../../../components/PostCard/PostCard';
import KeyboardContainer from '../../../components/KeyboardContainer/KeyboardContainer';
import {useDispatch, useSelector} from 'react-redux';
import authSelectors from '../../../redux/auth/authSelectors';
import postsSelectors from '../../../redux/posts/postsSelectors';
import authOperations from '../../../redux/auth/authOperations';

const Empty = ({ height, ...another }) => <View
  style={{ backgroundColor: '#ffffff', height }}
  {...another}
/>;

export default function ProfileScreen() {
  // const posts = useSelector(postsSelectors.getPosts);
  const user = useSelector(authSelectors.getUser);
  const [avatarImg, setAvatarImg] = useState(user.userAvatar);
  const dispatch = useDispatch();

  const posts = useSelector(postsSelectors.getOwnPosts)
    .slice()
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

  return (
    <KeyboardContainer>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageBackground
          style={s.bg}
          source={require('../../../assets/images/bg.jpg')}
        >
          <SafeAreaView
            style={{flex: 1}}
          >
            <FlatList
              data={posts}
              ListHeaderComponent={
                <View style={s.inner}>
                  <View style={s.avatarWrapper}>
                    <View style={s.avatar}>
                      <Avatar avatarImg={avatarImg} setAvatarImg={setAvatarImg} />
                    </View>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => dispatch(authOperations.authLogout())}
                    style={s.exitBtn}>
                    <LogOutIcon />
                  </TouchableOpacity>

                  <Text style={[commonStyle.title]}>{user.nickName}</Text>
                </View>
              }
              ItemSeparatorComponent={() => <Empty height={32} />}
              renderItem={({ item }) => (
                <View style={{paddingHorizontal: 16, backgroundColor: '#ffffff'}}>
                  <PostCard
                    title={item.title}
                    likeCount={item.likeCount}
                    // imgUrl={item.imgUrl}
                    imgUri={item.imgUri}
                    location={item.location}
                    locationData={item.locationData}
                    comments={item.comments}
                    post={item}
                  />
                </View>
              )}
              ListEmptyComponent={<View style={{
                height: 100,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text>У вас ще не має постів</Text></View>}
              ListFooterComponent={<Empty height={43} />}
            />

            <View style={{
              marginTop: -1,
              flexGrow: 10 ** 10,
              width: '100%',
              backgroundColor: '#ffffff',
            }} />
          </SafeAreaView>
        </ImageBackground>
      </View>
    </KeyboardContainer>
  );
}
