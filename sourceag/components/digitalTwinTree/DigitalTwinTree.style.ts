import { StyleSheet } from "react-native";

export const DigitalTwinTreeStyles = (colors: { backgroundColor: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${colors.backgroundColor}`,
      bottom: 200,
    },
  });
