import PlusIcon from "../../assets/icons/plus.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import { Text, View, StyleSheet, Dimensions, Pressable } from "react-native";
const Dashboard = () => {
  return (
    <>
      <View style={[styles.appBarShape, styles.appBarZIndex]}>
        <View style={styles.flexHeader}>
          <Pressable onPress={() => {}}>
            <MenuIcon color="white" width="28" height="28" />
          </Pressable>
          <Text style={styles.headerText}>New chat</Text>
          <Pressable onPress={() => {}}>
            <PlusIcon color="white" width="28" height="28" />
          </Pressable>
        </View>
      </View>
      <View style={styles.body}></View>
    </>
  );
};

const styles = StyleSheet.create({
  appBarShape: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    backgroundColor: "#343545",
    height: 100,
  },
  buttons: {
    alignItems: "center",
    height: 40,
    width: 40,
  },
  flexHeader: {
    marginTop: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 15,
    paddingRight: 15,
  },
  appBarZIndex: {
    zIndex: 3,
  },
  body: {
    backgroundColor: "#343545",
    flex: 1,
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 20,
    marginBottom: 40,
  },
});

export default Dashboard;
