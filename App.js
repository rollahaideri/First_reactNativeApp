import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image,  } from "react-native";

export default function App() {
  //All Functions
  var textInputValue = "<answer goes here>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  const handleChangeText = () => console.log(textInputValue); //contst arrow function

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#ADD8E6" }}>
        <Text h1 style={{ fontSize: 40, fontWeight: "bold" }}>
          {" "}
          Hello World!{" "}
        </Text>
        <Text h2 style={{ fontSize: 30 }}>
          First React Native App
        </Text>
        <Text h3>
          {" "}
          This is a pragraph explaining what this app is all about, As you can
          see there are already many components including tex, images and
          buttons
        </Text>
      </View>
      
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          What would you like to get out of this course?
        </Text>
        <TextInput placeholder="Initial Text" onChangeText={handleChangeText} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          An emoji describing how you are feeling about the course:
        </Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./assets/Happy.png")}
        />
      </View>

      <View style={{ flex: "space-around" }}>
        <Button
          title="Submit"
          titleStyle={{ color: "blue" }}
          onPress={handlePress}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

    
    justifyContent: "topleft",
  },
});
