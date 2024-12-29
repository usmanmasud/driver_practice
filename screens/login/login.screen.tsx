import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import styles from "@/utils/container/style";
import Images from "@/utils/images";
import SignInText from "@/components/login/signin.text";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { router } from "expo-router";
import PhoneNumberInput from "@/components/login/phone-number.input";

export default function LoginScreen() {
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);
  const [countryCode, setCountryCode] = useState("+880");

  return (
    <View>
      {/* <AuthContainer
        topSpace={windowHeight(150)}
        imageShow={true}
        container={ */}
      <View>
        <View>
          <View>
            <Image style={styles.transfromLine} source={Images.line} />
            <SignInText />
            <View style={[external.mt_25, external.Pb_10]}>
              <PhoneNumberInput
                phone_number={phone_number}
                setphone_number={setphone_number}
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
              <View style={[external.mt_25, external.Pb_15]}>
                <Button
                  title="Get Opt"
                  height={windowHeight(30)}
                  onPress={() =>
                    router.push("/(routes)/verification-phone-number")
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: windowWidth(8),
                  paddingBottom: windowHeight(15),
                }}
              >
                <TouchableOpacity
                  onPress={() => router.push("/(routes)/signup")}
                >
                  <Text style={{ fontSize: windowHeight(12) }}>
                    Dont have any rider account?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* }
      /> */}
    </View>
  );
}
