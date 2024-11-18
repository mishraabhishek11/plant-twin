import { View } from "react-native";
import FruitStageDrawerOption from "./FruitStageDrawerOption";
import { FruitStage } from "@/constants/FruitStage";
import { styles } from "./FruitStageDrawer.style";

const FruitStageDrawer = (props: { onPress: (stage: string) => void }) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.BUD_FRUIT}
          rotate={false}
          selected={false}
          title="knop"
          onPress={() => {
            onPress(FruitStage.BUD_FRUIT);
          }}
        />
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.FLOWER_FRUIT}
          rotate={false}
          selected={false}
          title="Bloem"
          onPress={() => {
            onPress(FruitStage.FLOWER_FRUIT);
          }}
        />
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.SET_FRUIT}
          rotate={false}
          selected={false}
          title="Gezette vrucht"
          onPress={() => {
            onPress(FruitStage.SET_FRUIT);
          }}
        />
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.MATURE_GREEN_FRUIT}
          rotate={false}
          selected={false}
          title="Hard groene vrucht"
          onPress={() => {
            onPress(FruitStage.MATURE_GREEN_FRUIT);
          }}
        />
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.BREAKER_STAGE_FRUIT}
          rotate={false}
          selected={false}
          title="Bonte vrucht"
          onPress={() => {
            onPress(FruitStage.BREAKER_STAGE_FRUIT);
          }}
        />
        <FruitStageDrawerOption
          fruitDevelopmentState={FruitStage.HARVESTABLE_FRUIT}
          rotate={false}
          selected={false}
          title="Oogstbare vrucht"
          onPress={() => {
            onPress(FruitStage.HARVESTABLE_FRUIT);
          }}
        />
      </View>
    </View>
  );
};

export default FruitStageDrawer;
