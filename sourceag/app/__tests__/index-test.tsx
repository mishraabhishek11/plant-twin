import { render } from "@testing-library/react-native";

import Home from "../index";

describe("<Home />", () => {
  test("Text renders correctly on Home", () => {
    const tree = render(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
