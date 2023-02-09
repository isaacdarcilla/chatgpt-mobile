import { Image, StyleSheet, Text, View } from "react-native";
import GPTButton from "../components/Button";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      <Text style={styles.textStyle}>Welcome to ChatGPT Mobile</Text>
      <Text style={styles.textStyle}>
        Log in with your OpenAI account to continue
      </Text>
      <View style={styles.buttonContainer}>
        <GPTButton title="Log in" />
        <View style={styles.space} />
        <GPTButton title="Sign up" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#343541",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#343541",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "bold",
    marginBottom: 25,
    fontSize: 15,
    color: "#fff",
  },
  logo: {
    width: 83,
    height: 85,
    marginBottom: 25,
  },
  space: {
    width: 10,
    height: 10,
  },
});

export default Auth;
