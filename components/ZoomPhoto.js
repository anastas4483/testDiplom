import { Image, Dimensions } from "react-native"
import ImageZoom from "react-native-image-pan-zoom"
import { useState } from "react"

export const ZoomPhoto = (props) => {
  const [sourses, setSourse] = useState([
    require("../assets/1.jpg"),
    require("../assets/2.jpg"),
    require("../assets/3.jpg"),
    require("../assets/4.jpg"),
  ])
  const src = "../assets/" + props.numFloor + ".jpg"
  return (
    <ImageZoom
      cropWidth={Dimensions.get("window").width}
      cropHeight={Dimensions.get("window").height / 1.5}
      imageWidth={Dimensions.get("window").width * 2}
      imageHeight={Dimensions.get("window").height * 0.7}
      centerOn={{ x: 0, y: 0, scale: 0.5, duration: 1 }}
      enableCenterFocus={false}
      useNativeDriver={true}
      style={{ paddingHorizontal: 10 }}
    >
      <Image
        style={{ width: "100%", height: "100%", paddingHorizontal: 10 }}
        source={sourses[props.numFloor - 1 || 0]}
      />
    </ImageZoom>
  )
}
