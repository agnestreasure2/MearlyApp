import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import TrendingNow from "../screens/TrendingNow";
import Recommended from "../screens/Recommended";
import Restaurant from "../screens/Restaurant";




const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="TrendingNow" component={TrendingNow} />
      <Stack.Screen name="Recommended" component={Recommended} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      
     

    </Stack.Navigator>
  );
};

export default StackScreen;
