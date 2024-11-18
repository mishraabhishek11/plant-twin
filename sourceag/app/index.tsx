import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
  useColorScheme,
} from "react-native";
import { getStemByID, updateStem } from "@/services";
import DigitalTwinTree from "../components/digitalTwinTree/DigitalTwinTree";
import FruitStageDrawer from "@/components/fruitStages/FruitStageDrawer";
import { Child } from "@/components/digitalTwinTree/DigitalTwinTree.type";
import { stemID } from "@/constants/GlobalConstant";
import { Colors } from "@/constants/Colors";
import { Styles } from "./index.style";
import { updateFruitStage } from "./index.helper";

/**
 *
 *
 * @return {*}
 */
function Home() {
  const colorScheme = useColorScheme();
  const styles = Styles({
    backgroundColor: Colors[colorScheme ?? "light"].background,
  });

  const [stemDetail, setStemDetail] = useState(null);
  const [childFruit, setChildFruit] = useState({ childId: "", fruitId: "" });

  /**
   * On selction Fruit from tree
   * Update State with Selected Child Id and Fruit Id
   * and Open Side Drawer
   * @param childId
   * @param fruitId
   */
  const onFruitSelection = (childId: string, fruitId: string) => {
    setChildFruit({ childId, fruitId });
    updateDrawerStatus(1);
  };

  /**
   * on Updation of Fruit Stage by selecting Stage from drawer
   * Call Backend API to update Fruit Stage
   * Clear state of Selected Fruit
   * Close side Drawer
   * @param {string} stage
   */
  const onFruitStageUpdate = (stage: string) => {
    if (stemDetail) {
      const stemToUpdate: { id: string; root_node: Child } = stemDetail;
      const updatedChildren: Child[] = updateFruitStage(
        [stemToUpdate.root_node],
        childFruit.childId,
        childFruit.fruitId,
        stage
      );

      if (updatedChildren.length > 0) {
        updateStem(stemID, {
          id: stemToUpdate.id,
          root_node: updatedChildren[0],
        })
          .then((response: any) => {
            setStemDetail(response?.data);
          })
          .catch((error) => setStemDetail(null));
      }
    }
    updateDrawerStatus(0);
    setChildFruit({ childId: "", fruitId: "" });
  };

  /** Call Backend API to get Stem Detail on Mount */
  useEffect(() => {
    getStemByID(stemID)
      .then((response: any) => {
        setStemDetail(response?.data);
      })
      .catch((error) => setStemDetail(null));
  }, []);

  const drawerAnimatedValue = useRef(new Animated.Value(0)).current;
  const translateX = drawerAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get("window").width / 2, 0],
    extrapolate: "clamp",
  });

  const updateDrawerStatus = (toValue: number) => {
    Animated.timing(drawerAnimatedValue, {
      toValue,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {stemDetail ? (
            <>
              <DigitalTwinTree
                onFruitSelection={onFruitSelection}
                data={stemDetail}
                childFruit={childFruit}
              />
              <Animated.View
                style={[
                  styles.fruitStageDrawerContainer,
                  { transform: [{ translateX }] },
                ]}
              >
                <FruitStageDrawer onPress={onFruitStageUpdate} />
              </Animated.View>
            </>
          ) : (
            <ActivityIndicator size={"large"} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
