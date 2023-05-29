import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import TrendingNow from "../screens/TrendingNow";




const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="TrendingNow" component={TrendingNow} />

    </Stack.Navigator>
  );
};

export default StackScreen;
