import { Child, Coordinate } from "./DigitalTwinTree.type";

/**
 * To check if child have children
 * @param {Child} member
 * @return {boolean}
 */
export const hasChildren = (member: Child): boolean => {
  return member ? member.children && member.children.length > 0 : false;
};

/**
 * to check if stem is main stem
 * @param {Child} item
 * @return {boolean}
 */
export const isMainStem = (item: Child): boolean => {
  return item ? `${item.level}` === "1" || `${item.level}` === "0" : false;
};

/**
 * to check if stem is branch
 * @param {Child} item
 * @return {boolean}
 */
export const isBranchStem = (item: Child): boolean => {
  return item ? `${item.level}` === "2" : false;
};

/**
 * to get main stem children
 * @param {Child} item
 * @return {Child[]}
 */
export const itemMainStemChildrens = (item: Child): Child[] => {
  return item && item.children && item.children.length > 0
    ? [...item.children].filter((child) => {
        return `${child.level}` === "1";
      })
    : [];
};

/**
 * to get branch stem children
 * @param {Child} item
 * @return {Child[]}
 */
export const itemBranchStemChildrens = (item: Child): Child[] => {
  return item && item.children && item.children.length > 0
    ? [...item.children].filter((child) => {
        return `${child.level}` === "2";
      })
    : [];
};

/**
 *
 * @param {number} value
 * @param {number} stemCoverHeight
 * @param {number} valueReverse
 * @return {number}
 */
export const revertY = (
  value: number,
  stemCoverHeight: number,
  valueReverse: number,
  windowHight: number
): number => {
  return windowHight - value + stemCoverHeight * valueReverse;
};

/**
 * Calculate main stem  SVG path control points
 * @param {number} stemTopX
 * @param {number} stemTopY
 * @param {number} stemBottomX
 * @param {number} stemBottomY
 * @param {number} stemCoverHeight
 * @param {number} stemCurvWidth
 * @return {*}
 */
export const getMainStemControlPoints = (
  stemTopX: number,
  stemTopY: number,
  stemBottomX: number,
  stemBottomY: number,
  stemCoverHeight: number,
  stemCurvWidth: number
): { first: Coordinate; second: Coordinate } => {
  const stemFirstCPX: number = stemTopX + (stemCurvWidth / 10) * 2;
  const stemFirstCPY: number = stemTopY + (stemCoverHeight / 10) * 4;

  const stemSecondCPX: number = stemBottomX - (stemCurvWidth / 10) * 2;
  const stemSecondCPY: number = stemTopY + (stemCoverHeight / 10) * 8;

  return {
    first: { x: stemFirstCPX, y: stemFirstCPY },
    second: { x: stemSecondCPX, y: stemSecondCPY },
  };
};

/**
 * Calculate branch stem  SVG path control points
 * @param {number} branchBottomX
 * @param {number} branchBottomY
 * @param {number} stemLengthX
 * @param {number} stemLengthY
 * @param {number} branchSideWeight
 * @return {*}
 */
export const getBranchStemControlPoints = (
  branchBottomX: number,
  branchBottomY: number,
  stemLengthX: number,
  stemLengthY: number,
  branchSideWeight: number
): { first: Coordinate; second: Coordinate } => {
  const stemFirstCPX: number =
    branchBottomX + (stemLengthX / 10) * 4 * branchSideWeight;
  const stemFirstCPY: number = branchBottomY - (stemLengthY / 10) * 6;

  const stemSecondCPX: number =
    branchBottomX + (stemLengthX / 10) * 6 * branchSideWeight;
  const stemSecondCPY: number = branchBottomY - (stemLengthY / 10) * 4;
  return {
    first: { x: stemFirstCPX, y: stemFirstCPY },
    second: { x: stemSecondCPX, y: stemSecondCPY },
  };
};
