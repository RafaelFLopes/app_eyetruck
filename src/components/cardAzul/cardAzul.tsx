import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./styleCardAzul";

export default function CardAzul({
  onPress,
  title,
  imageSource,
  style,
}: {
  onPress: () => void;
  title: string;
  imageSource?: any;
  style?: any;
}) {
  return (
    <TouchableOpacity style={[styles.cardAzul, style]} onPress={onPress}>
      {imageSource && (
        <Image source={imageSource} style={styles.imageCardAzul} resizeMode="contain" />
      )}
      <Text style={styles.textCardAzul}>{title}</Text>
    </TouchableOpacity>
  );
}