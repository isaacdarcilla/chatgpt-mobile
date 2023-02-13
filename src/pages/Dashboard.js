import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import CardHeader from "../components/CardHeader";
import NavBar from "../components/NavBar";
import SunIcon from "../../assets/icons/sun.svg";
import ZapIcon from "../../assets/icons/zap.svg";
import AlertTriangleIcon from "../../assets/icons/alert-triangle.svg";
import Card from "../components/Card";
import BottomBar from "../components/BottomBar";
import Input from "../components/Input";
const Dashboard = () => {
  return (
    <>
      <View style={styles.body}>
        <NavBar />
        <ScrollView>
          <Text style={styles.headerText}>ChatGPT</Text>
          <View style={styles.spacing} />
          <CardHeader
            iconComponent={<SunIcon color="white" />}
            title="Examples"
          />
          <Card title='"Explain quantum computing in simple terms" →' />
          <Card title='"Got any creative ideas for a 10 year old’s birthday?" →' />
          <Card title='"How do I make an HTTP request in Javascript?" →' />
          <View style={styles.spacing} />
          <CardHeader
            iconComponent={<ZapIcon color="white" />}
            title="Capabilities"
          />
          <Card title="Remembers what user said earlier in the conversation" />
          <Card title="Allows user to provide follow-up corrections" />
          <Card title="Trained to decline inappropriate requests" />
          <View style={styles.spacing} />
          <CardHeader
            iconComponent={<AlertTriangleIcon color="white" />}
            title="Limitation"
          />
          <Card title="May occasionally generate incorrect information" />
          <Card title="May occasionally produce harmful instructions or biased content" />
          <Card title="Limited knowledge of world and events after 2021" />
          <View style={{ paddingBottom: 150 }} />
        </ScrollView>
        <BottomBar>
          <Input />
          <Text style={styles.textStyle}>
            Free Research Preview. Our goal is to make AI systems more natural
            and safe to interact with. Your feedback will help us improve.
          </Text>
        </BottomBar>
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
    marginTop: 40,
  },
  spacing: {
    margin: 15,
  },
  textStyle: {
    color: "#fff",
    fontSize: 12,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
    paddingTop: 10,
  },
  inputStyle: {},
});

export default Dashboard;
