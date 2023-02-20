import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import GPTCardHeader from "../components/GPTCardHeader";
import NavBar from "../components/GPTNavBar";
import SunIcon from "../../assets/icons/sun.svg";
import ZapIcon from "../../assets/icons/zap.svg";
import AlertTriangleIcon from "../../assets/icons/alert-triangle.svg";
import GPTCard from "../components/GPTCard";
import GPTBottomBar from "../components/GPTBottomBar";
import GPTInput from "../components/GPTInput";
import GPTNavBar from "../components/GPTNavBar";
const Dashboard = () => {
  return (
    <>
      <View style={styles.body}>
        <GPTNavBar />
        <ScrollView>
          <Text style={styles.headerText}>ChatGPT</Text>
          <View style={styles.spacing} />
          <GPTCardHeader
            iconComponent={<SunIcon color="white" />}
            title="Examples"
          />
          <GPTCard title='"Explain quantum computing in simple terms" →' />
          <GPTCard title='"Got any creative ideas for a 10 year old’s birthday?" →' />
          <GPTCard title='"How do I make an HTTP request in Javascript?" →' />
          <View style={styles.spacing} />
          <GPTCardHeader
            iconComponent={<ZapIcon color="white" />}
            title="Capabilities"
          />
          <GPTCard title="Remembers what user said earlier in the conversation" />
          <GPTCard title="Allows user to provide follow-up corrections" />
          <GPTCard title="Trained to decline inappropriate requests" />
          <View style={styles.spacing} />
          <GPTCardHeader
            iconComponent={<AlertTriangleIcon color="white" />}
            title="Limitation"
          />
          <GPTCard title="May occasionally generate incorrect information" />
          <GPTCard title="May occasionally produce harmful instructions or biased content" />
          <GPTCard title="Limited knowledge of world and events after 2021" />
          <View style={{ paddingBottom: 150 }} />
        </ScrollView>
        <GPTBottomBar>
          <GPTInput />
          <Text style={styles.textStyle}>
            Free Research Preview. Our goal is to make AI systems more natural
            and safe to interact with. Your feedback will help us improve.
          </Text>
        </GPTBottomBar>
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
