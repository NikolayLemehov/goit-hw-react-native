import { Image, Text, View } from 'react-native';
import { s } from './PostCard.style';
import MapPinIcon from '../svg/MapPinIcon';
import MessageCircleIcon from '../svg/MessageCircleIcon';

export default function PostCard({messageCount}) {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={require('../../assets/images/posts/img01.jpg')}
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


