import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GPTButton from "../components/GPTButton";
import { getValueFor, save } from "../helpers/Store";
import Dashboard from "./Dashboard";
import { REACT_APP_EXPO_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

const Auth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [token, setToken] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId: REACT_APP_EXPO_CLIENT_ID,
      webClientId: REACT_APP_EXPO_CLIENT_ID,
    },
    {
      useProxy: true,
    }
  );

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && save("storedAccessToken", accessToken);
    }
  }, [response, accessToken]);

  const tokenStored = async () => {
    const result = await getValueFor("storedAccessToken");

    return result;
  };

  (async () => {
    const userToken = await tokenStored();
    setToken(userToken);
  })();

  return (
    <>
      {token === true && <Dashboard />}
      {token === null && (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/icon.png")}
          />
          <Text style={styles.textStyle}>Welcome to ChatGPT Mobile</Text>
          <Text style={styles.textStyle}>
            Log in with your OpenAI account to continue
          </Text>
          <View style={styles.buttonContainer}>
            <GPTButton title="Log in" onPress={() => promptAsync()} />
            <View style={styles.space} />
            <GPTButton title="Sign up" onPress={() => promptAsync()} />
          </View>
        </View>
      )}
    </>
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
