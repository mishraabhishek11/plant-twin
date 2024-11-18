import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={84}
    fill="none"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 154 154"
    {...props}
  >
    <Path
      fill="#F1EAE1"
      stroke="#CC672F"
      strokeDasharray="3 5"
      strokeLinecap="round"
      strokeWidth={2}
      d="M26.972 81c-4-1.2-6.611-5-10.5-8.5-3.888-3.5-7.8-8.5-9-10.5-4.078-6.797-5.5-12-6-20.5s0-7.5 0-13 4.5-6.5 6-10 2-2.5 1-7 .998-6.999 7-9c6.003-2.001 12 .5 15 1.5s8.5 3 14 2 11-2.5 17.5 1 7.5 5.5 10.5 12.5 3 16 3.5 25.5.5 15-6 26.5-16.5 8-25.5 9.5-12.5 1.5-17.5 0Z"
      opacity={0.9}
    />
  </Svg>
);
export default SvgComponent;
