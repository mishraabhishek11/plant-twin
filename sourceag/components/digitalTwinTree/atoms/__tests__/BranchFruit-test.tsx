import { render } from "@testing-library/react-native";

import BranchFruit from "../BranchFruit";

describe("<BranchFruit />", () => {
  test("Text renders correctly on BranchFruit", () => {
    const tree = render(
      <BranchFruit stems={[]} nodeRadius={15} onDrawerStatusChange={jest.fn} />
    );

    expect(tree).toMatchSnapshot();
  });

  test("Text renders correctly on BranchFruit Full", () => {
    const tree = render(
      <BranchFruit
        stems={[
          {
            child: {
              level: 0,
              id: "0",
              children: [
                {
                  children: [
                    {
                      children: [],
                      fruits: [
                        {
                          development_state: "BUD_FRUIT",
                          id: "fb532607-a858-4ad2-98f9-7aff6f682e92",
                        },
                      ],
                      id: "2",
                      level: 1,
                    },
                    {
                      children: [],
                      fruits: [
                        {
                          development_state: "FLOWER_FRUIT",
                          id: "fb532607-a858-4ad2-98f1-7aff6f682e92",
                        },
                      ],
                      id: "1a",
                      level: 2,
                    },
                  ],
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
              fruits: [],
            },
            position: {
              top: { x: 211.5, y: 702 },
              firstControlPoint: { x: 219.5, y: 762 },
              secondControlPoint: { x: 163.5, y: 822 },
              bottom: { x: 171.5, y: 852 },
            },
            fruit: {
              fruit: {
                development_state: "BUD_FRUIT",
                id: "fb532607-a858-4ad2-98f9-7aff6f682e92",
              },
              position: { x: 171.5, y: 0 },
              rotate: true,
            },
          },
          {
            child: {
              children: [
                {
                  children: [],
                  fruits: [
                    {
                      development_state: "BUD_FRUIT",
                      id: "fb532607-a858-4ad2-98f9-7aff6f682e92",
                    },
                  ],
                  id: "2",
                  level: 1,
                },
                {
                  children: [],
                  fruits: [
                    {
                      development_state: "FLOWER_FRUIT",
                      id: "fb532607-a858-4ad2-98f1-7aff6f682e92",
                    },
                  ],
                  id: "1a",
                  level: 2,
                },
              ],
              fruits: [
                {
                  development_state: "HARVESTABLE_FRUIT",
                  id: "fb532607-a858-4ad2-98f2-7aff6f682e92",
                },
              ],
              id: "1",
              level: 1,
            },
            position: {
              top: { x: 171.5, y: 552 },
              firstControlPoint: { x: 179.5, y: 612 },
              secondControlPoint: { x: 203.5, y: 672 },
              bottom: { x: 211.5, y: 702 },
            },
            fruit: {
              fruit: {
                development_state: "HARVESTABLE_FRUIT",
                id: "fb532607-a858-4ad2-98f2-7aff6f682e92",
              },
              position: { x: 211.5, y: 150 },
              rotate: false,
            },
          },
          {
            child: {
              children: [],
              fruits: [
                {
                  development_state: "FLOWER_FRUIT",
                  id: "fb532607-a858-4ad2-98f1-7aff6f682e92",
                },
              ],
              id: "1a",
              level: 2,
            },
            position: {
              top: { x: 271.5, y: 584.5 },
              firstControlPoint: { x: 235.5, y: 628.5 },
              secondControlPoint: { x: 247.5, y: 650.5 },
              bottom: { x: 211.5, y: 694.5 },
            },
            fruit: {
              fruit: {
                development_state: "FLOWER_FRUIT",
                id: "fb532607-a858-4ad2-98f1-7aff6f682e92",
              },
              position: { x: 271.5, y: 252.5 },
              rotate: false,
            },
          },
          {
            child: {
              children: [],
              fruits: [
                {
                  development_state: "BUD_FRUIT",
                  id: "fb532607-a858-4ad2-98f9-7aff6f682e92",
                },
              ],
              id: "2",
              level: 1,
            },
            position: {
              top: { x: 211.5, y: 402 },
              firstControlPoint: { x: 219.5, y: 462 },
              secondControlPoint: { x: 163.5, y: 522 },
              bottom: { x: 171.5, y: 552 },
            },
            fruit: {
              fruit: {
                development_state: "BUD_FRUIT",
                id: "fb532607-a858-4ad2-98f9-7aff6f682e92",
              },
              position: { x: 171.5, y: 300 },
              rotate: true,
            },
          },
        ]}
        nodeRadius={15}
        onDrawerStatusChange={jest.fn}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
