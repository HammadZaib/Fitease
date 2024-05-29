import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import StatusBars from "../components/StatusBars";
import Inputs from "../components/Inputs";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color } from "../GlobalStyles";
import { useState } from "react";
import { shadow } from "react-native-paper";

const SingIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  // const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://172.20.10.3:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate("Onboarding");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    // Step 3
    navigation.navigate("SignUp");
  };

  return (
    <View style={[styles.singIn, styles.singFlexBox]}>

      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <View style={styles.logo}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <Text style={[styles.logotext, styles.logotextTypo]}>
            ACTIVETRACK
          </Text>
        </View>
        <View style={[styles.emailInput, styles.inputSpaceBlock]}>
          <Inputs
            placeholder="Enter Your Email"
            placeholderTextColor="#c2c3cb"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputSpaceBlock}>
          <Inputs
            placeholder="Password"
            placeholderTextColor="#c2c3cb"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <View style={[styles.inputSpaceBlock, styles.shadow]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={handleLogin}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            // onPress={() => navigation.navigate("Onboarding")}
          >
            <Text style={[styles.startTraining, styles.logotextTypo]}>
              Sign In
            </Text>
          </Pressable>
        </View>
        <View style={[styles.forgotPassword, styles.buttonFlexBox]}>
          <Text style={styles.forgotPassword1}>Forgot Password?</Text>
        </View>
        <View style={[styles.singInWith, styles.singFlexBox]}>
          <Text style={styles.signInWith}>Sign in with</Text>
          <View style={[styles.icons, styles.iconsSpaceBlock]}>
            <View style={[styles.logosapple, styles.viewboxLayout]}>
              <View style={[styles.viewbox, styles.viewboxLayout]} />
              <Image
                style={[styles.viewbox, styles.viewboxLayout]}
                contentFit="cover"
                source={require("../assets/shape.png")}
              />
            </View>
            <Image
              style={styles.fLogoRgbBlue1024Icon}
              contentFit="cover"
              source={require("../assets/f-logo-rgbblue-1024.png")}
            />
            <Image
              style={styles.fLogoRgbBlue1024Icon}
              contentFit="cover"
              source={require("../assets/flatcoloriconsgoogle.png")}
            />
          </View>
          <View style={[styles.signup, styles.iconsSpaceBlock]}>
            <Text
              style={[styles.dontHaveAn, styles.signUp1Typo]}
            >{`Don't have an account? `}</Text>
            <Pressable
              style={styles.signUp}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContentScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  singFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  logotextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  inputSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    marginTop: 25,
    // alignSelf: "stretch",
    width: "100%",
    alignItems: "center",
    
  },
  iconsSpaceBlock: {
    marginTop: 30,
    flexDirection: "row",
  },
  viewboxLayout: {
    width: 26,
    height: 32,
  },
  signUp1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  statusBar: {
    right: 0,
    width: 390,
    height: 50,
    justifyContent: "flex-end",
    zIndex: 0,
    top: 0,
    position: "absolute",
  },
  logoIcon: {
    width: 68,
    height: 64,
  },
  logotext: {
    fontSize: FontSize.size_8xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    marginTop: 25,
  },
  logo: {
    alignItems: "center",
  },
  emailInput: {
    justifyContent: "center",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  shadow:{
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 1,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: 8,
    height: 45,
    backgroundColor: Color.primary,
    paddingHorizontal: 33,
    paddingVertical: 12,
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  forgotPassword1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  forgotPassword: {
    marginTop: 25,
    justifyContent: "center",
  },
  signInWith: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  viewbox: {
    left: 0,
    height: 32,
    top: 0,
    position: "absolute",
  },
  logosapple: {
    height: 32,
  },
  fLogoRgbBlue1024Icon: {
    width: 32,
    height: 32,
  },
  icons: {
    width: 138,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dontHaveAn: {
    display: "flex",
    width: 100,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUp1: {
    color: Color.primary,
    width: 58,
    lineHeight: 20,
  },
  signUp: {
    marginLeft: 25,
  },
  signup: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  singInWith: {
    marginTop: 25,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 25,
    alignSelf: "stretch",
    flex: 1,
  },
  singIn: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    // height: "100%",
    paddingTop: Padding.p_31xl,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default SingIn;
