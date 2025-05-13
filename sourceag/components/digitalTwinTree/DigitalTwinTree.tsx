import React from "react";
import { View, Dimensions, useColorScheme } from "react-native";
import Svg, { G, Path } from "react-native-svg";

import BranchNode from "./atoms/BranchNode";
import BranchFruit from "./atoms/BranchFruit";

import { Colors } from "@/constants/Colors";
import { Child, Stem } from "./DigitalTwinTree.type";
import { DigitalTwinTreeStyles } from "./DigitalTwinTree.style";
import {
  getBranchStemControlPoints,
  getMainStemControlPoints,
  hasChildren,
  isBranchStem,
  isMainStem,
  itemBranchStemChildrens,
  itemMainStemChildrens,
  revertY,
} from "./DigitalTwinTree.helper";
import {
  mainStemCurvWidth,
  mainStemHeight,
  branchStemExpansionX,
  branchStemExpansionY,
  stemNodeRadius,
  mainStemTickness,
  branchStemTickness,
} from "@/constants/GlobalConstant";

/**
 *
 *
 * @param {{
 *   data: { id: string; root_node: Child };
 *   onFruitSelection: (childId: string, fruitId: string) => void;
 * }} props
 * @return {*}
 */
const DigitalTwinTree = (props: { data: { id: string; root_node: Child } }) => {
  const { data } = props;
  const colorScheme = useColorScheme();
  const stemColor = Colors[colorScheme ?? "light"].androidGreen;

  const windowWidth = Dimensions.get("window").width;
  const windowHight = Dimensions.get("window").height;
  const nodeRadius = stemNodeRadius;

  const mainStemWidth = mainStemTickness;
  const branchStemWidth = branchStemTickness;

  /** @type {*} */
  const styles = DigitalTwinTreeStyles({
    backgroundColor: Colors[colorScheme ?? "light"].background,
  });

  /**
   * It will be called recursively in order
   * to calculate main stem SVG path coordinates
   * it will be render Right and Left depend upon left param
   * @param {Child} child
   * @param {boolean} [left=false]
   * @return {*}  {Stem[]}
   */
  const renderMainStem = (child: Child, left: boolean = false): Stem[] => {
    const stemCurvWidth = mainStemCurvWidth;
    const spaceBothSideAfterBranches = 10;
    const stemCoverHeight = mainStemHeight;
    const stemCoverWidth = windowWidth - spaceBothSideAfterBranches;

    // if left branch thne top will be right to center by curve width
    const stemTopX =
      (stemCoverWidth - stemCurvWidth) / 2 + (left ? stemCurvWidth : 0);
    const stemTopY: number = revertY(
      stemCoverHeight * parseInt(child.id),
      stemCoverHeight,
      -1,
      windowHight
    );

    // if not left (right) branch bottom will be right to center by curve width
    const stemBottomX =
      (stemCoverWidth - stemCurvWidth) / 2 + (left ? 0 : stemCurvWidth);
    const stemBottomY = revertY(
      stemCoverHeight * (parseInt(child.id) + 1),
      stemCoverHeight,
      1,
      windowHight
    );

    const stemBranchBottomX = stemBottomX;
    const stemBranchBottomY = stemBottomY - nodeRadius / 2;

    const { first, second } = getMainStemControlPoints(
      stemTopX,
      stemTopY,
      stemBottomX,
      stemBottomY,
      stemCoverHeight,
      stemCurvWidth
    );

    const itemBranchStemChildren = itemBranchStemChildrens(child);

    const childs: Stem[] =
      itemBranchStemChildren.length > 0
        ? renderBranchStem(
            stemBranchBottomX,
            stemBranchBottomY,
            itemBranchStemChildren[0],
            stemCoverWidth,
            stemCoverHeight,
            left ? -1 : 1
          )
        : [];

    return [
      {
        child: child,
        position: {
          top: { x: stemTopX, y: stemTopY },
          firstControlPoint: { x: first.x, y: first.y },
          secondControlPoint: { x: second.x, y: second.y },
          bottom: { x: stemBottomX, y: stemBottomY },
        },
        fruit: {
          fruit:
            child && child.fruits && child.fruits.length > 0
              ? child.fruits[0]
              : undefined,
          position: { x: stemBottomX, y: windowHight - stemBottomY },
          rotate: left,
        },
      },
      ...childs,
    ];
  };

  /**
   * It will be called recursively in order
   * to calculate branch stem SVG path coordinates
   * @param {number} branchBottomX
   * @param {number} branchBottomY
   * @param {Child} child
   * @param {number} stemCoverWidth
   * @param {number} stemCoverHeight
   * @param {number} [branchSideWeight=1]
   * @return {*}  {*}
   */
  const renderBranchStem = (
    branchBottomX: number,
    branchBottomY: number,
    child: Child,
    stemCoverWidth: number,
    stemCoverHeight: number,
    branchSideWeight: number = 1
  ): any => {
    const itemHaveBranchStemChildren = itemBranchStemChildrens(child);

    const stemTopX: number =
      branchBottomX + branchStemExpansionX * branchSideWeight;
    const stemTopY: number = branchBottomY - branchStemExpansionY;

    const { first, second } = getBranchStemControlPoints(
      branchBottomX,
      branchBottomY,
      branchStemExpansionX,
      branchStemExpansionY,
      branchSideWeight
    );

    const childs: Stem[] =
      itemHaveBranchStemChildren.length > 0
        ? renderBranchStem(
            stemTopX,
            stemTopY,
            itemHaveBranchStemChildren[0],
            stemCoverWidth,
            stemCoverHeight,
            branchSideWeight
          )
        : [];

    return [
      {
        child: child,
        position: {
          top: { x: stemTopX, y: stemTopY },
          firstControlPoint: { x: first.x, y: first.y },
          secondControlPoint: { x: second.x, y: second.y },
          bottom: { x: branchBottomX, y: branchBottomY },
        },
        fruit: {
          fruit:
            child && child.fruits && child.fruits.length > 0
              ? child.fruits[0]
              : undefined,
          position: { x: stemTopX, y: windowHight - stemTopY - nodeRadius },
          rotate: branchSideWeight < 0,
        },
      },
      ...childs,
    ];
  };

  /**
   * It will be called recursively in order to render the tree.
   * @param {(Child[] | null | undefined)} data
   * @return {*}
   */
  const renderTree = (data: Child[] | null | undefined): any => {
    const stems: Stem[] = [];
    if (data) {
      data.forEach((item) => {
        const { id } = item;
        stems.push(
          ...(isMainStem(item)
            ? renderMainStem(item, parseInt(id) % 2 === 0)
            : [])
        );
        if (hasChildren(item)) {
          item.children.forEach((child: Child) => {
            stems.push(...renderTree([child]));
          });
        }
      });
    }
    return stems;
  };

  const stems: Stem[] = renderTree([
    {
      level: 0,
      id: "0",
      children: [data.root_node],
      fruits: [],
    },
  ]);

  return (
    <View style={styles.container}>
      <Svg height={windowHight} width={windowWidth}>
        {stems.map((stem: Stem, index: number) => {
          const { child, position } = stem;
          return (
            <G key={child.id}>
              {itemMainStemChildrens(child).length > 0 ? (
                <Path
                  testID={`${child.id}`}
                  key={index}
                  d={`M${position.top.x} ${position.top.y} C${position.firstControlPoint.x} ${position.firstControlPoint.y} ${position.secondControlPoint.x} ${position.secondControlPoint.y} ${position.bottom.x} ${position.bottom.y}`}
                  stroke={stemColor}
                  strokeWidth={mainStemWidth}
                  fill="none"
                />
              ) : null}
              {isBranchStem(child) ? (
                <Path
                  testID={`${child.id}`}
                  d={`M${position.top.x} ${position.top.y} C${position.firstControlPoint.x} ${position.firstControlPoint.y} ${position.secondControlPoint.x} ${position.secondControlPoint.y} ${position.bottom.x} ${position.bottom.y}`}
                  stroke={stemColor}
                  strokeWidth={branchStemWidth}
                  fill="none"
                />
              ) : null}
            </G>
          );
        })}
        {stems.map((stem: Stem, index: number) => {
          const { child, position } = stem;
          const isMain = isMainStem(child);
          return (
            <G key={child.id}>
              <BranchNode
                x={isMain ? position.bottom.x : position.top.x}
                y={isMain ? position.bottom.y - nodeRadius : position.top.y}
                nodeRadius={nodeRadius}
                child={child}
              />
            </G>
          );
        })}
      </Svg>
      <BranchFruit stems={stems} nodeRadius={nodeRadius} />
    </View>
  );
};

export default DigitalTwinTree;
