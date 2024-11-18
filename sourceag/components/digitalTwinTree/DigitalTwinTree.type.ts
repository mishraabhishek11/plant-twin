type ID = {
  id: string;
};

/**
 * Coordinate Type, to be used in stem coordinates
 */
export type Coordinate = { x: number; y: number };

/**
 * Fruit Type, stem JSON fruit object
 */
export type Fruit = ID & {
  development_state: string;
};

/**
 * Child Type, stem JSON child object
 */
export type Child = ID & {
  level: number;
  children: Child[];
  fruits: Fruit[];
};

/**
 *  Stem Type, to be used in
 * stem rendering coordinate calculation
 */
export type Stem = {
  child: Child;
  position: {
    top: Coordinate;
    firstControlPoint: Coordinate;
    secondControlPoint: Coordinate;
    bottom: Coordinate;
  };
  fruit: {
    fruit: Fruit | undefined;
    position: Coordinate;
    rotate: boolean;
  };
};
