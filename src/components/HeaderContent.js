import { View, Text, Image, TextInput, Platform } from "react-native";
import React, { useState } from "react";

const HeaderContent = () => {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: Platform.OS === "ios" ? 0.6 : 0.5,
      }}
    >
      {/* location icons */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 60 : 35,
          marginHorizontal: 17,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/location.png")}
            style={{ width: 12.5, height: 15, tintColor: "white" }}
          />
        </View>
        <View style={{ paddingRight: 25, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/bell.png")}
            style={{ width: 17, height: 15.85, tintColor: "white" }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/cart.png")}
            style={{ width: 18.5, height: 13.49, tintColor: "white" }}
          />
        </View>
      </View>

      {/* header text */}
      <View style={{ marginTop: 30, marginLeft: 16 }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "600",
            lineHeight: 30,
          }}
        >
          What dish would you like to order
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color: "#121212",
                fontSize: 25,
                fontWeight: "700",
                lineHeight: 28,
                fontFamily: "satoshi",
              }}
            >
              today?
            </Text>
          </View>
        
        </View>
      </View>

      {/* search bar */}
      <View
        style={{
          backgroundColor: null,
          height: 50,
          borderWidth: 0.5,
          borderColor: "white",
          marginTop: 20,
          flexDirection: "row",
          paddingHorizontal: 15,
          marginHorizontal: 30,
          borderRadius: 12,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/search.png")}
            style={{
              width: 11.98,
              height: 11.98,
              justifyContent: "center",
              tintColor: "#6B6C6C",
            }}
          />
        </View>

        <TextInput
          autoFocus={false}
          onChangeText={setSearch}
          value={search}
          placeholder={"Search here"}
          placeholderTextColor={"white"}
          style={{
            color: "black",
            paddingLeft: 12,
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default HeaderContent;
