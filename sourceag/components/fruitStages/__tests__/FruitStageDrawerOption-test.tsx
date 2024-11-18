import { render } from "@testing-library/react-native";

import FruitStageDrawerOption from "../FruitStageDrawerOption";
import { FruitStage } from "@/constants/FruitStage";

describe("<FruitStageDrawerOption />", () => {
  test("Text renders correctly on FruitStageDrawerOption", () => {
    const tree = render(
      <FruitStageDrawerOption
        fruitDevelopmentState={FruitStage.HARVESTABLE_FRUIT}
        rotate={false}
        title="Oogstbare vrucht"
        onPress={jest.fn}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
