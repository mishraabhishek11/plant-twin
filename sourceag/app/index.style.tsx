import { StyleSheet } from "react-native";

export const Styles = (colors: { backgroundColor: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${colors.backgroundColor}`,
    },
    fruitStageDrawerContainer: {
      width: "50%",
      height: "100%",
      backgroundColor: `${colors.backgroundColor}`,
      position: "absolute",
      left: "50%",
      zIndex: 12000,
      paddingHorizontal: 10,
      borderColor: "grey",
      borderWidth: 0.2,
    },
  });
