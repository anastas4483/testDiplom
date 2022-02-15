import { Text, View, Image, Pressable,TouchableOpacity } from "react-native"
import { stylePT } from "../styles/profilTeacher"
import { FlatList, TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"


export default function GoBackBtn() {
    return(
        <TouchableOpacity style={gStyle.wrapBack}>
            <Image
              source={require("../assets/backArrow.png")}
              style={{ width: 27, height: 24 }}
            />
            <Text style={gStyle.BackText}>Назад</Text>
          </TouchableOpacity>
    )}


        