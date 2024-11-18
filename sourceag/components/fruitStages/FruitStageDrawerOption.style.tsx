import { StyleSheet } from "react-native";

export const Styles = (colors: { cultured: string }) =>
  StyleSheet.create({
    container: {
      height: 100,
      maxWidth: 150,
      marginHorizontal: 15,
      justifyContent: "flex-end",
      alignItems: "center",
      padding: 8,
      marginVertical: 4,
      borderWidth: 0.3,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 3 },
      backgroundColor: `${colors.cultured}`,
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
    },
    imageContainer: {
      flex: 1,
      top: 20,
      left: 20,
    },
  });
