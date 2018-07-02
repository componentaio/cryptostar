import { Dimensions, Platform } from "react-native";

export const color = {
  black: "#141A22",
  grey: "#6E7F8D",
  greyInactive: "#A6B0B9",
  greyBg: "#EFF0F4",
  greyBg2: "#FAFAFA",
  blue: "#006DFF",
  white: "#FFF",
  green: "#17B978",
  red: "#DC2F2F"
};

export const fontSize = {
  small: 10,
  regular: 16,
  big: 18,
  large: 20,
  xlarge: 26,
  xxlarge: 30
};

export const fontFamily = {
  regular: "Helvetica"
};

export const padding = 20;
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const coinIndexTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.grey
};
export const formLabelTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const upTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.green
};
export const downTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.red
};
export const headerTextStyle = {
  fontSize: fontSize.large,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const taglineTextStyle = {
  fontSize: fontSize.big,
  fontFamily: fontFamily.regular,
  color: color.grey
};
export const inactiveTaglineTextStyle = {
  fontSize: fontSize.big,
  fontFamily: fontFamily.regular,
  color: color.greyInactive
};
export const linkTextStyle = {
  fontSize: fontSize.big,
  fontFamily: fontFamily.regular,
  color: color.blue,
  lineHeight: 30
};
export const inputTextStyle = {
  fontSize: fontSize.big,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const regularBlueStyle = {
  fontSize: fontSize.regular,
  fontFamily: fontFamily.regular,
  color: color.blue
};
export const regularGreyStyle = {
  fontSize: fontSize.regular,
  fontFamily: fontFamily.regular,
  color: color.grey
};
export const inputBlueTextStyle = {
  fontSize: fontSize.big,
  fontFamily: fontFamily.regular,
  color: color.blue
};
export const buttonTextStyle = {
  fontSize: fontSize.regular,
  fontFamily: fontFamily.regular,
  color: color.white
};
export const keyboardTextStyle = {
  fontSize: fontSize.xlarge,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const accountHeaderTextStyle = {
  fontSize: fontSize.xxlarge,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const tabBarActiveTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.black
};
export const tabBarInactiveTextStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.regular,
  color: color.greyInactive
};
