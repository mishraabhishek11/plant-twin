import { render } from "@testing-library/react-native";

import FruitStageImage from "../FruitStageImage";
import { FruitStage } from "@/constants/FruitStage";

describe("<FruitStageImage />", () => {
  test("Text renders correctly on FruitStageImage", () => {
    const tree = render(
      <FruitStageImage
        fruitDevelopmentState={FruitStage.HARVESTABLE_FRUIT}
        rotate={false}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
