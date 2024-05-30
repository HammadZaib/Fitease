import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Navigations from "../components/Navigation";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type HeightInputScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HeightInputScreen'>;

const HeightInputScreen: React.FC = () => {
  const navigation = useNavigation<HeightInputScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'HeightInputScreen'>>();
  const [height, setheight] = useState<string>('');

  const handleNext = () => {
    // Validate height input
    const parsedheight = parseFloat(height);
    if (!parsedheight || isNaN(parsedheight)) {
      alert('Please enter a valid height.');
      return;
    }
    navigation.navigate('AgeInputScreen', { ...route.params, height: parsedheight });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[styles.selectHeight, styles.scrollFlexBox]}>
      <View style={[styles.scroll, styles.scrollFlexBox]}>
        <Navigations
          step2Of5="Step 2 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.selectHeight1, styles.selectHeight1Typo]}>
          Select height 🚶‍♂️
        </Text>
        <View style={styles.button1}>
          <Text style={styles.buttontext}>CM</Text>
        </View>
        <View style={[styles.heightInput, styles.continueFlexBox]}>
          <TextInput
            style={[styles.input, styles.inputShadowBox]}
            value={height}
            onChangeText={setheight}
            keyboardType="numeric"
          />
          <Text style={styles.cm}>cm</Text>
        </View>
      </View>
      <View style={[styles.continue, styles.continueFlexBox]}>
        <Pressable
          style={[styles.button, styles.inputShadowBox]}
          onPress={handleNext}
        >
          <Text style={[styles.startTraining, styles.selectHeight1Typo]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  selectHeight1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  continueFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    marginTop: 20,
    backgroundColor: Color.primary,
    width: 125,
    height: 40,
    borderRadius: 10,
  },
  buttontext: {
    textAlign: "center",
    marginTop: 8,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  selectHeight1: {
    marginTop: 90,
    fontSize: FontSize.size_xl,
    fontWeight: 'bold',
    color: Color.colorSlategray_100,
    textAlign: 'center',
  },
  input: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 97,
    height: 64,
    backgroundColor: Color.colorWhite,
  },
  cm: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.colorGray_100,
    textAlign: "left",
    marginTop: 10,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  heightInput: {
    marginTop: 60,
  },
  scroll: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    alignItems: "center",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  continue: {
    width: "92.05%",
    right: "4.1%",
    bottom: 0,
    left: "3.85%",
    height: 69,
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  selectHeight: {
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default HeightInputScreen;