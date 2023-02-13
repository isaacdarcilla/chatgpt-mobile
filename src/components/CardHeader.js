import { StyleSheet, Text, View } from "react-native";
import SunIcon from "../../assets/icons/sun.svg";

const CardHeader = (props) => {
  const { iconComponent = <SunIcon color="white" />, title = "Examples" } =
    props;
  return (
    <>
      <View style={styles.cardStyle}>
        <View>{iconComponent}</View>
        <View style={styles.space} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  space: {
    width: 10,
    height: 10,
  },
});

export default CardHeader;
