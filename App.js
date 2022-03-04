import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ContadorScreen from "./src/screens/ContadorScreen";
import ColorScreen from "./src/screens/ColorScreen";
import MudarCor from "./src/screens/MudarCor";
import TextInputScreen from "./src/screens/TextInputScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Imagem: ImageScreen,
    Contador: ContadorScreen,
    Cores: ColorScreen,
    MudarCores: MudarCor,
    TextInput: TextInputScreen,
    Box: BoxScreen,
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Aplicativo muito maneiro",
      textalign: "center",
    },
  }
);

export default createAppContainer(navigator);
