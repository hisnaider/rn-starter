import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen"
import ContadorScreen from "./src/screens/ContadorScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Imagem: ImageScreen,
    Contador: ContadorScreen,
    
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
