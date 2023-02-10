import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState, useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GPTButton from "../components/Button";
import { getValueFor, save } from "../helpers/Store";
import Dashboard from "./Dashboard";

WebBrowser.maybeCompleteAuthSession();

const Auth = (props) => {
  const { expoClientId, googleEndpoint } = props;

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId: expoClientId,
      webClientId: expoClientId,
    },
    {
      useProxy: true,
    }
  );

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && getUserInfo();
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

  async function getUserInfo() {
    let response = await fetch(googleEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    save("storedAccessToken", accessToken);
    setUser(userInfo);
  }

  return (
    <View style={styles.container}>
      {token === true && <Dashboard />}
      {token === null && (
        <>
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
            <GPTButton title="Sign up" />
          </View>
        </>
      )}
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
