import React from "react";
import { Platform } from "react-native";
import { Provider as Material } from "react-native-paper";
import { LoginAuthenticationSignPage } from "./pages/loginAuthenticationSignPage";

export const App = () => {
  return (
    <Material.PaperProvider>
      <React.Fragment>
        {Platform.OS === "web"
          ? <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
        }
      `}</style>
          : null}
      </React.Fragment>
      <LoginAuthenticationSignPage />;
    </Material.PaperProvider>
  );
};
