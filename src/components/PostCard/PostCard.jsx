import {Image, Text, TouchableOpacity, View} from 'react-native';
import { s } from './PostCard.style';
import MapPinIcon from '../svg/MapPinIcon';
import MessageCircleIcon from '../svg/MessageCircleIcon';
import ThumbsUpIcon from '../svg/ThumbsUpIcon';
import {useNavigation} from '@react-navigation/native';
// import posts from '../../assets/images/posts'

// console.log(posts)

export default function PostCard(
  {
    likeCount, title, location, locationData, imgUri,
    imgUrl, comments
  }) {
  // const source = `../../assets/images/posts/${imgUrl}`
  const navigation = useNavigation();
  const onPressCommentsIcon = () => {
    navigation.navigate('comments', {imgUri, imgUrl, comments});
  };
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={(() => {
          if (imgUrl) return imgUrl;
          if (imgUri) return {uri: imgUri};
          return false;
        })()}
      />
      <Text style={s.title}>{title}</Text>
      <View style={s.dataWrapper}>
        <View style={s.sentenceWrapper}>
          <TouchableOpacity style={[s.sentence, { marginRight: 24 }]} onPress={onPressCommentsIcon}>
            <MessageCircleIcon has={comments.length > 0} />
            <Text style={[s.sentenceText, s.sentenceTextInactive]}>{comments.length}</Text>
          </TouchableOpacity>
          <View style={[s.sentence]}>
            <ThumbsUpIcon />
            <Text style={[s.sentenceText, s.sentenceTextInactive]}>{likeCount}</Text>
          </View>
        </View>
        <TouchableOpacity style={s.sentence} onPress={() => navigation.navigate('map', {location, locationData})}>
          <MapPinIcon />
          <Text style={s.sentenceText}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


