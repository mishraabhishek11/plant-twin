import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { Circle, Text } from "react-native-svg";
import { Child } from "../DigitalTwinTree.type";

export default function BranchNode(props: {
  x: number;
  y: number;
  child: Child;
  nodeRadius: number;
}) {
  const { x, y, child, nodeRadius } = props;
  const colorScheme = useColorScheme();
  return (
    <>
      {child && child.level && child.level > 0 ? (
        <>
          <Circle
            stroke="darkgray"
            strokeWidth="0.5"
            fill={Colors[colorScheme ?? "light"].background}
            opacity={0.8}
            cx={x}
            cy={y}
            r={nodeRadius}
            testID={`Circle_${child.id}`}
          />
          <Text
            textAnchor="middle"
            alignmentBaseline="central"
            x={x}
            y={y}
            testID={`Label_${child.id}`}
          >
            {child.id}
          </Text>
        </>
      ) : null}
    </>
  );
}
