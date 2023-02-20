import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import SendIcon from "../../assets/icons/send.svg";

const GPTInput = () => {
  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput style={styles.input} />
        </KeyboardAvoidingView>
        <View style={styles.icon}>
          <SendIcon color="white" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#444655",
    backgroundColor: "#444654",
    borderRadius: 5,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 18,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 20,
  },
});

export default GPTInput;
