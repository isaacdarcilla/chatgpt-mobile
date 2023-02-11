import { Text, View } from "react-native";
import SunIcon from "../../assets/icons/sun.svg";

const CardHeader = (props) => {
  const { iconComponent = <SunIcon />, title = "Examples" } = props;
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
