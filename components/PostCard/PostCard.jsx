import { Image, Text, View } from 'react-native';
import { s } from './PostCard.style';
import MapPinIcon from '../svg/MapPinIcon';
import MessageCircleIcon from '../svg/MessageCircleIcon';
// import posts from '../../assets/images/posts'

// console.log(posts)

export default function PostCard({messageCount, imgUrl = require('../../assets/images/posts/img03.jpg')}) {
  // const source = `../../assets/images/posts/${imgUrl}`
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={imgUrl}
        // source={{uri: source}}
      />
      <Text style={s.title}>Ліс</Text>
      <View style={s.dataWrapper}>
        <View style={s.sentence}>
          <MessageCircleIcon has={messageCount > 0} />
          <Text style={[s.sentenceText, s.sentenceTextInactive]}>{messageCount}</Text>
        </View>
        <View style={s.sentence}>
          <MapPinIcon />
          <Text style={s.sentenceText}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
    </View>
  );
}


