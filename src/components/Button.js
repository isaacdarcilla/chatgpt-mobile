import { Text, StyleSheet, Pressable } from "react-native";

const GPTButton = (props) => {
  const { onPress, title = "Log in" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#0FA47F",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default GPTButton;
