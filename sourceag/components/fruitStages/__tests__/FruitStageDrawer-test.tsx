import { render } from "@testing-library/react-native";

import FruitStageDrawer from "../FruitStageDrawer";

describe("<FruitStageDrawer />", () => {
  test("Text renders correctly on FruitStageDrawer", () => {
    const tree = render(<FruitStageDrawer onPress={jest.fn} />);

    expect(tree).toMatchSnapshot();
  });
});
