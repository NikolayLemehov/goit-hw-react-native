import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { style as s } from './ProfileScreen.style';
import Avatar from '../../../components/Avatar/Avatar';
import { useState } from 'react';
import LogOutIcon from '../../../components/svg/LogOutIcon';
import { commonStyle } from '../../../styles/commonStyle';
import { postList } from '../../../data/postList';
import PostCard from '../../../components/PostCard/PostCard';

const Empty = ({ height, ...another }) => <View
  style={{ backgroundColor: '#ffffff', height }}
  {...another}
/>;

export default function ProfileScreen({setIsAuth}) {
  const [isEmptyAvatar, setIsEmptyAvatar] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBackground
        style={[s.bg, {
          // borderWidth: 1,
          // borderColor: 'blue',
        }]}
        source={require('../../../assets/images/bg.jpg')}
      >
        <SafeAreaView
          style={{
            flex: 1,
            // borderWidth: 1,
            // borderColor: 'red',
          }}
        >
          <FlatList
            data={postList}
            ListHeaderComponent={
              <View style={s.inner}>
                <View style={s.avatarWrapper}>
                  <View style={s.avatar}>
                    <Avatar isEmpty={isEmptyAvatar} onClickBtn={setIsEmptyAvatar} />
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setIsAuth(false)}
                  style={s.exitBtn}>
                  <LogOutIcon />
                </TouchableOpacity>

                <Text style={[commonStyle.title]}>Natali Romanova</Text>
              </View>
            }
            ItemSeparatorComponent={() => <Empty height={32} />}
            renderItem={({ item }) => (
              <View style={{paddingHorizontal: 16, backgroundColor: '#ffffff'}}>
                <PostCard
                  title={item.title}
                  likeCount={item.likeCount}
                  messageCount={item.messageCount}
                  imgUrl={item.imgUrl}
                  location={item.location}
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
            // marginTop: 25,
            width: '100%',
            // height: 100,
            backgroundColor: '#ffffff',
            // borderWidth: 2,
            // borderColor: 'yellow',
          }} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
