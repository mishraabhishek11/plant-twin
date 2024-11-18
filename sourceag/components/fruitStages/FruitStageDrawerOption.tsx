import { TouchableOpacity, View, Text, useColorScheme } from "react-native";
import FruitStageImage from "./FruitStageImage";
import { Colors } from "@/constants/Colors";
import { Styles } from "./FruitStageDrawerOption.style";

const FruitStageDrawerOption = (props: {
  fruitDevelopmentState: string;
  rotate: boolean;
  selected: boolean;
  title: string;
  onPress: () => void;
}) => {
  const { fruitDevelopmentState, rotate, selected, title, onPress } = props;
  const colorScheme = useColorScheme();
  const styles = Styles({
    cultured: Colors[colorScheme ?? "light"].cultured,
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <FruitStageImage
          fruitDevelopmentState={fruitDevelopmentState}
          rotate={rotate}
          selected={selected}
        />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FruitStageDrawerOption;
