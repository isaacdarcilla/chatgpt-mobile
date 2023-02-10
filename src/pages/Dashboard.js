import { View, StyleSheet, Text, Button } from "react-native";
import CardHeader from "../components/CardHeader";
import NavBar from "../components/NavBar";
const Dashboard = () => {
  return (
    <>
      <View style={styles.body}>
        <NavBar />
        <Text style={styles.headerText}>ChatGPT</Text>
        <CardHeader
          iconComponent={<Button title="Button Text"></Button>}
          title="Examples"
        />
        <View></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#343545",
    flex: 1,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    margin: 40,
  },
});

export default Dashboard;
