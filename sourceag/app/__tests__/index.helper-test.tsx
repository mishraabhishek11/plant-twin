import { render } from "@testing-library/react-native";

import { updateFruitStage } from "../index.helper";
import { FruitStage } from "@/constants/FruitStage";

describe("<Home />", () => {
  test("Text renders correctly on Home", () => {
    const updated = updateFruitStage(
      [
        {
          children: [],
          fruits: [
            {
              development_state: "HARVESTABLE_FRUIT",
              id: "fb532607-a858-4ad2-98f2-7aff6f682e92",
            },
          ],
          id: "1",
          level: 1,
        },
      ],
      "1",
      "fb532607-a858-4ad2-98f2-7aff6f682e92",
      FruitStage.BREAKER_STAGE
    );

    expect(updated).toStrictEqual([
      {
        children: [],
        fruits: [
          {
            development_state: "BREAKER_STAGE",
            id: "fb532607-a858-4ad2-98f2-7aff6f682e92",
          },
        ],
        id: "1",
        level: 1,
      },
    ]);
  });
});
