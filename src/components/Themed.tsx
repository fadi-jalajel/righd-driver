import { Text as RNText, View as RNView } from "react-native";

export function Text(props: RNText["props"]) {
  return <RNText {...props} />;
}

export function View(props: RNView["props"]) {
  return <RNView {...props} />;
}
