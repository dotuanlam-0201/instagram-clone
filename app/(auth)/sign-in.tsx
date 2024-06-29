import CustomButton from "@/components/CustomButton"
import FormField from "@/components/FormField"
import { images } from "@/constants"
import { Link } from "expo-router"
import React from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex items-center justify flex-col h-screen px-5">
          <View className="w-full mt-20">
            <Image
              resizeMode="contain"
              className="w-[135px] h-[35px] mx-auto"
              source={images.logo}
            />
            <FormField otherStyles="mt-10" title="Email" />
            <FormField otherStyles="mt-5" title="Password" />
            <CustomButton
              containerStyle="mt-7"
              title="Sign In"
              onPress={() => {}}
              isLoading={false}
            />

            <Text className="font-psemibold text-green-100 mx-auto mt-5">
              Don't have account?{" "}
              <Link href={"sign-up"}>
                <Text className="text-secondary">Sign Up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})
