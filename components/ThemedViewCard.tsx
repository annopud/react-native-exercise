import { View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedViewProps } from "./ThemedView";

export function ThemedViewCard({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "cardBackground"
  );
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
