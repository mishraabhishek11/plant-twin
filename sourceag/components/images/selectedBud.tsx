import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={49}
    fill="none"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 98 98"
    {...props}
  >
    <Path
      fill="#F1EAE1"
      stroke="#CC672F"
      strokeDasharray="3 5"
      strokeLinecap="round"
      strokeWidth={2}
      d="M33 8.5c-2-3.5-4.5-3.5-7.5-5h0c-3-1.5-5-2.5-9-2S9 5 7.5 6 4 9.5 2 13.5.5 22 2 24.5s4.5 4 8 1.5 5 1 5 3.5.5 6 2 9 3.5 4.5 7.5 7 8.5 3 13 2 7.5-4.5 10-8 2.5-10 1-13.5-4-10-6.5-12.5-7-1.5-9-5Z"
      opacity={0.9}
    />
  </Svg>
);
export default SvgComponent;
