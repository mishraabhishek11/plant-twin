import { render } from "@testing-library/react-native";

import BranchNode from "../BranchNode";

describe("<BranchNode />", () => {
  test("Text renders correctly on BranchNode", () => {
    const tree = render(
      <BranchNode
        x={100}
        y={100}
        nodeRadius={15}
        child={{ id: "id", level: 1, children: [], fruits: [] }}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
