import Svg, { Path } from "react-native-svg"

const GridIcon = (props) => {
  return (
    <Svg
      width={40}
      height={40}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        clipRule='evenodd'
        d='M11 11h7v7h-7v-7ZM22 11h7v7h-7v-7ZM22 22h7v7h-7v-7ZM11 22h7v7h-7v-7Z'
        stroke={props.color || '#212121'}
        strokeOpacity={0.8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export default GridIcon