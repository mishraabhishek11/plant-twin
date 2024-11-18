import { TouchableOpacity, View } from "react-native";
import FruitStageImage from "@/components/fruitStages/FruitStageImage";
import { Stem } from "../DigitalTwinTree.type";
import { styles } from "./BranchFruit.style";

export default function BranchFruit(props: {
  stems: Stem[];
  nodeRadius: number;
  onFruitSelection: (childId: string, FruitId: string) => void;
  childFruit: { childId: string; fruitId: string };
}) {
  const { stems, nodeRadius, onFruitSelection, childFruit } = props;

  return (
    <>
      {stems && stems.length > 0
        ? stems.map((child) => {
            const { fruit, position, rotate } = child.fruit;
            const parent = child.child;

            if (fruit) {
              return (
                <View
                  key={`${parent.id}${fruit.id}`}
                  style={{
                    ...styles.fruitContainer,
                    bottom: position.y - nodeRadius / 2,
                    left: position.x - (rotate ? 80 + nodeRadius : -nodeRadius),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (
                        childFruit &&
                        childFruit.childId === "" &&
                        childFruit.fruitId === ""
                      ) {
                        onFruitSelection(parent.id, fruit.id);
                      }
                    }}
                    testID={`${parent.id}_${fruit.id}`}
                  >
                    <FruitStageImage
                      fruitDevelopmentState={fruit.development_state}
                      rotate={rotate}
                      selected={
                        childFruit &&
                        childFruit.childId === parent.id &&
                        childFruit.fruitId === fruit.id
                      }
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          })
        : null}
    </>
  );
}
