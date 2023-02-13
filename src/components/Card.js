import { View, Text, StyleSheet } from "react-native";
const Card = (props) => {
  const { title } = props;
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#444654",
    borderRadius: 8,
    padding: 20,
    alignContent: "center",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
