import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Fav from "../screens/Fav";
import Orders from "../screens/Orders";
import Favourite from "../screens/Favourite";
import Account from "../screens/Account";

import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/Home.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          }, 
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/favourite.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders} 
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/order.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
                 {
                    <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/favourite.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      }
              </View>

            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/account.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
