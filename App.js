import Auth from "./src/pages/Auth";
import Constants from "expo-constants";

export default function App() {
  return (
    <Auth
      expoClientId="619092906656-nmmfbmc3n4848v4hcqkjng8p9e0e1hi1.apps.googleusercontent.com"
      googleEndpoint="https://www.googleapis.com/userinfo/v2/me"
    />
  );
}
