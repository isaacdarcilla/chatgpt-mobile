import React from "react";
import { View, StyleSheet } from "react-native";

const BottomBar = ({ children }) => {
  return <View style={styles.bottomBar}>{children}</View>;
};

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "grey",
    backgroundColor: "#343545",
    borderTopWidth: 1,
  },
});

export default BottomBar;
