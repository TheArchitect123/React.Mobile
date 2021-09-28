import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center"
  },
  touchableButton: {
    backgroundColor: "#0000cd"
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#0000cd",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#0000cd"
  },
  buttonAccent: {
    color: "#ffffff",
    backgroundColor: "#0000cd"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
