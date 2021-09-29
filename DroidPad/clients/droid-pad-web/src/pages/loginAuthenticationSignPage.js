import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { RadioButton } from "react-native-paper";

let styleSheet = StyleSheet.create({
  testing: {
    backgroundColor: "#000000"
  }
});
export const LoginAuthenticationSignPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <RadioButton />
        <TouchableOpacity>
          <Button title="HAHAHAAH AMMAHAAHHA!" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
