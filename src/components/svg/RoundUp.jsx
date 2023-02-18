import Svg, { Circle, Path } from 'react-native-svg';

const RoundUpIcon = (props) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={17} cy={17} r={17} fill="#FF6C00" />
    <Path
      d="m17 10 .354-.354a.5.5 0 0 0-.708 0L17 10Zm4.646 5.354a.5.5 0 0 0 .708-.708l-.708.708Zm-10-.708a.5.5 0 0 0 .708.708l-.708-.708ZM16.5 24a.5.5 0 0 0 1 0h-1Zm.146-13.646 5 5 .708-.708-5-5-.708.708Zm0-.708-5 5 .708.708 5-5-.708-.708ZM16.5 10v7h1v-7h-1Zm0 7v7h1v-7h-1Z"
      fill="#fff"
    />
  </Svg>
);

export default RoundUpIcon;
