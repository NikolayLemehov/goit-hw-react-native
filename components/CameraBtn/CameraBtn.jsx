import CameraIcon from '../svg/CameraIcon';
import { TouchableOpacity } from 'react-native';
import { style as s } from './CameraBtn.style';

export default function CameraBtn({ isEdit }) {
  return (
    <TouchableOpacity style={[s.container, isEdit && s.containerEdit]}>
      <CameraIcon style={s.icon} color={isEdit ? '#ffffff' : '#BDBDBD'}/>
    </TouchableOpacity>
  );
}
