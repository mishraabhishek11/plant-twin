import { FruitStage } from "@/constants/FruitStage";
import HarvestableFruit from "../images/harvestableFruit";
import MatureGreenFruit from "../images/matureGreenFruit";
import BreakerStageFruit from "../images/breakerStageFruit";
import SelectedFruit from "../images/selectedFruit";
import BudFruit from "../images/budFruit";
import FlowerFruit from "../images/flowerFruit";
import SetFruit from "../images/setFruit";
import { View } from "react-native";
import SelectedBud from "../images/selectedBud";
import SelectedFlower from "../images/selectedFlower";
import SelectedSetFruit from "../images/selectedSetFruit";

const FruitStageImage = (props: {
  fruitDevelopmentState: string;
  rotate: boolean;
  selected: boolean;
}) => {
  const { fruitDevelopmentState, rotate, selected } = props;

  const rotateStyle = {
    transform: [{ rotateY: rotate ? "180deg" : "0deg" }],
  };

  /**
   * to verify if the fruit stage is within the specified stages param
   * @param {string[]} stages
   * @return {*}
   */
  const checkFruitStage = (stages: string[]) => {
    return stages.indexOf(fruitDevelopmentState) > -1;
  };

  /**
   *
   *
   * @return {*}
   */
  const renderBud = () => {
    return (
      <>
        <View
          style={{
            bottom: 0,
            left: rotate ? 30 : -1,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedBud style={rotateStyle} />
        </View>
        <View style={{ bottom: 49 }}>
          <BudFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  const renderFlower = () => {
    return (
      <>
        <View
          style={{
            bottom: 12,
            left: rotate ? 30 : 2,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedFlower style={rotateStyle} />
        </View>
        <View style={{ bottom: 73 }}>
          <FlowerFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  const renderSetFruit = () => {
    return (
      <>
        <View
          style={{
            bottom: 4,
            left: rotate ? 20 : 0,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedSetFruit style={rotateStyle} />
        </View>
        <View style={{ bottom: 68 }}>
          <SetFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  const renderBreakerFruit = () => {
    return (
      <>
        <View
          style={{
            bottom: 5,
            left: rotate ? 3 : -1,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedFruit style={rotateStyle} />
        </View>
        <View style={{ bottom: 84 }}>
          <BreakerStageFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  const renderMatureGreenFruit = () => {
    return (
      <>
        <View
          style={{
            bottom: 5,
            left: rotate ? 3 : -1,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedFruit style={rotateStyle} />
        </View>
        <View style={{ bottom: 84 }}>
          <MatureGreenFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  const renderHarvestableFruit = () => {
    return (
      <>
        <View
          style={{
            bottom: 5,
            left: rotate ? 3 : -1,
            opacity: selected ? 1 : 0,
          }}
        >
          <SelectedFruit style={rotateStyle} />
        </View>
        <View style={{ bottom: 84 }}>
          <HarvestableFruit style={rotateStyle} />
        </View>
      </>
    );
  };

  return (
    <>
      {checkFruitStage([FruitStage.HARVESTABLE, FruitStage.HARVESTABLE_FRUIT])
        ? renderHarvestableFruit()
        : null}
      {checkFruitStage([
        FruitStage.BREAKER_STAGE,
        FruitStage.BREAKER_STAGE_FRUIT,
      ])
        ? renderBreakerFruit()
        : null}
      {checkFruitStage([FruitStage.MATURE_GREEN, FruitStage.MATURE_GREEN_FRUIT])
        ? renderMatureGreenFruit()
        : null}
      {checkFruitStage([FruitStage.BUD, FruitStage.BUD_FRUIT])
        ? renderBud()
        : null}
      {checkFruitStage([FruitStage.FLOWER_FRUIT, FruitStage.FLOWER])
        ? renderFlower()
        : null}
      {checkFruitStage([FruitStage.SET, FruitStage.SET_FRUIT])
        ? renderSetFruit()
        : null}
    </>
  );
};

export default FruitStageImage;
