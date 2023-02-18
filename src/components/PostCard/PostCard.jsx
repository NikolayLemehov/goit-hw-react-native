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
    messageCount, likeCount, title, location, locationData,
    imgUrl = require('../../assets/images/posts/img03.jpg'),
  }) {
  // const source = `../../assets/images/posts/${imgUrl}`
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={imgUrl}
      />
      <Text style={s.title}>{title}</Text>
      <View style={s.dataWrapper}>
        <View style={s.sentenceWrapper}>
          <TouchableOpacity style={[s.sentence, { marginRight: 24 }]} onPress={() => navigation.navigate('comments')}>
            <MessageCircleIcon has={messageCount > 0} />
            <Text style={[s.sentenceText, s.sentenceTextInactive]}>{messageCount}</Text>
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


