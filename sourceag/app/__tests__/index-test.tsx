import { render } from "@testing-library/react-native";

// eslint-disable-next-line import/namespace
import Home from "../index";

describe("<Home />", () => {
  test("Text renders correctly on Home", () => {
    const tree = render(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
