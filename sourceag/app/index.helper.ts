import { Child } from "@/components/digitalTwinTree/DigitalTwinTree.type";

/**
 * Find Fruit object in Stem JSON by Child Id and Fruit Id
 * Update fruit stage
 * return list of Child
 * @param {Child[]} data
 * @param {string} childId
 * @param {string} fruitId
 * @param {string} stage
 * @return {Child[]}
 */
export const updateFruitStage = (
  data: Child[],
  childId: string,
  fruitId: string,
  stage: string
): Child[] => {
  if (data && data.length) {
    const childs: Child[] = data.map((item) => {
      const { id, fruits } = item;
      if (
        id === childId &&
        fruits &&
        fruits.length > 0 &&
        fruits[0].id === fruitId
      ) {
        item.fruits[0].development_state = stage;
      }
      item.children = updateFruitStage(item.children, childId, fruitId, stage);
      return item;
    });
    return childs;
  }
  return [];
};
