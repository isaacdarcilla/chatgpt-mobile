import { Text, View } from "react-native";

const CardHeader = (props) => {
  const { iconComponent, title = "Examples" } = props;
  return (
    <>
      <View>
        {iconComponent}
        <Text>{title}</Text>
      </View>
    </>
  );
};

export default CardHeader;
