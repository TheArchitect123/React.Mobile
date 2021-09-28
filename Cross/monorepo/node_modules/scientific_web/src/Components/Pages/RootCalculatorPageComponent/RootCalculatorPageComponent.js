import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import * as KeyStrokes from "../../../Constants/KeyStrokes";
import NumberPadBtn from "../../Items/NumberPadBtn";
import { NumberPadRow } from "../../Items/NumberPadRow";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-start"
  },
  value: {
    color: "#fff",
    fontSize: 100,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export const RootCalculatorPageComponent = () => {
  const [calcState, setCalcState] = useState("0");

  function handleTap(option) {
    if (option == KeyStrokes.Clear) {
      setCalcState(KeyStrokes.Zero);
    } else {
      if (calcState == KeyStrokes.Zero) {
        setCalcState(option);
      } else {
        setCalcState(calcState.concat(option));
      }
    }
  }

  function handleOperation(){

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {calcState}
          </Text>
          <NumberPadRow>
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Clear}
              onPress={() => handleTap(KeyStrokes.Clear)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.NegateOption}
              onPress={() => handleTap(KeyStrokes.NegateOption)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.PercentageOption}
              onPress={() => handleTap(KeyStrokes.PercentageOption)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.DivideOption}
              onPress={() => handleTap(KeyStrokes.DivideOption)}
            />
          </NumberPadRow>

          <NumberPadRow>
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Seven}
              theme="accent"
              onPress={() => handleTap(KeyStrokes.Seven)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Eight}
              theme="accent"
              onPress={() => handleTap(KeyStrokes.Eight)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Nine}
              theme="accent"
              onPress={() => handleTap(KeyStrokes.Nine)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.MultiplyOption}
              theme="accent"
            />
          </NumberPadRow>

          <NumberPadRow>
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Four}
              onPress={() => handleTap(KeyStrokes.Four)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Five}
              onPress={() => handleTap(KeyStrokes.Five)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Six}
              onPress={() => handleTap(KeyStrokes.Six)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.MinusOption}
              onPress={() => handleTap(KeyStrokes.MinusOption)}
            />
          </NumberPadRow>

          <NumberPadRow>
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.One}
              onPress={() => handleTap(KeyStrokes.One)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Two}
              onPress={() => handleTap(KeyStrokes.Two)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Three}
              onPress={() => handleTap(KeyStrokes.Three)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.AddOption}
              onPress={() => handleTap(KeyStrokes.AddOption)}
            />
          </NumberPadRow>

          <NumberPadRow>
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.Zero}
              onPress={() => handleTap(KeyStrokes.Zero)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.DotOption}
              onPress={() => handleTap(KeyStrokes.DotOption)}
            />
            <NumberPadBtn
              theme="accent"
              text={KeyStrokes.EqualOption}
              onPress={() => handleTap(KeyStrokes.EqualOption)}
            />
          </NumberPadRow>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
