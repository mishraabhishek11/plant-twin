import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={68}
    fill="none"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 114 114"
    {...props}
  >
    <Path
      fill="#F1EAE1"
      stroke="#CC672F"
      strokeDasharray="3 5"
      strokeLinecap="round"
      strokeWidth={2}
      d="M23.753 3.848C18.173 1.191 9.694 1.856 6.152 2.52c-1.772.443-3.587 1.86-4.65 3.985-1.328 2.657.282 6.35 1.329 8.967.664 1.66 4.981 2.656 9.298 2.656 4.318 0 8.303 1.993 8.635 3.986.332 1.992-3.985 2.989-5.978 5.645-1.992 2.657-2.657 8.635-2.657 11.292s2.657 13.284 4.318 17.933c1.66 4.65 5.977 7.306 11.291 8.967 2.817.88 4.97-.035 7.638.06 2.365.085 5.278 1.248 7.306.936 4.318-.664 10.96-6.642 12.288-9.963 1.328-3.321 3.321-11.623 3.653-16.605.332-4.981-3.32-9.963-4.981-12.62-1.66-2.656-9.631-4.981-10.96-5.645-1.328-.665-1.328-5.314-4.317-8.635-2.989-3.32-7.638-6.31-14.612-9.63Z"
      opacity={0.9}
    />
  </Svg>
);
export default SvgComponent;
