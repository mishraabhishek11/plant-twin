import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={73}
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
      d="M25 6.5C21.19 1.053 13.94 1.536 9.015 2.357 4.092 3.178 1 9.373 1 15.262 1 21.15 4.016 23 7.902 23c2.44 0 6.086-.554 6.531 4.348.445 4.903.806 4.358-1.633 8.716-2.44 4.357-8.38 7.449-9.36 14.424-.981 6.975-.267 7.986 4.462 13.9 1.394 1.744 2.85 4.75 5.987 5.448 4.512 1.003 6.846-4.797 9.797-3.813 2.95.984 4.636 5.182 6.588 5.74 2.44.697 4.297.006 5.93-4.106s5.8-.618 8.01-3.567c2.09-2.79 1.938-5.602 2.286-9.09.66-6.6-7.5-16-8.5-20.5s-1.234-3.553-4.5-9-4.69-13.553-8.5-19Z"
      opacity={0.9}
    />
  </Svg>
);
export default SvgComponent;
