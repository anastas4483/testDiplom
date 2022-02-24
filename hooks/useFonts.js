import * as Font from "expo-font";
 
const useFonts = async () =>
  await Font.loadAsync({
    'os_reg': require("../assets/fonts/OpenSans-Regular.ttf"),
    'sansat_light': require("../assets/fonts/sansation-light.ttf"),
    'sansat_reg': require("../assets/fonts/Sansation_Regular.ttf"),
    // 'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  });

  export default useFonts