import { Text, View, Image, Pressable } from "react-native"
import { gStyle } from "../styles/gStyle"
export default function Header() {
  return (
<View style={gStyle.header}>
          <Text style={gStyle.headerText}>Добрый день, Андрей!</Text>
          <Pressable>
            <Image
              source={require("../assets/gear.png")}
              style={gStyle.headerGear}
            />
          </Pressable>
        </View>


  )}