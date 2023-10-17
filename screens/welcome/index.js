import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    <CheckBox style={styles.JbZIwaVf} title="Checkbox Title"></CheckBox><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={styles.GalFGMuS}></Slider><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={styles.EduvMXKR}></Slider><Slider style={styles.LwbbsfbR} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  JbZIwaVf: {
    width: 183,
    height: 69
  },
  GalFGMuS: {
    position: "absolute",
    width: 150,
    height: 40
  },
  EduvMXKR: {
    position: "absolute",
    width: 150,
    height: 40
  },
  LwbbsfbR: {
    width: 150,
    height: 40
  }
});
export default WelcomeScreen;