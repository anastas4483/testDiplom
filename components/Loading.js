import {
    Text,
    View,
    Image,
  } from "react-native"
  import { gStyle } from "../styles/gStyle"


export default function Loading(props) {
   return(
       <View style={gStyle.wrapLoading}>
        <Image
          source={require("../assets/loading.gif")}
          style={gStyle.loading}
        />
        <Text>Ждем, пока все загрузится...</Text>
      </View>
   ) 
}
