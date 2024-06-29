import CustomButton from "@/components/CustomButton"
import { images } from "@/constants"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { NativeWindStyleSheet } from "nativewind"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

NativeWindStyleSheet.setOutput({
  default: "native",
})

const MainApplication = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            resizeMode="contain"
            className="w-[130px] h-[84px]"
            source={images.logo}
          />
          <Image
            resizeMode="contain"
            className="max-w-[380px] max-h-[300px] w-full"
            source={images.cards}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              source={images.path}
            />
          </View>
          <Text className="text-sm font-pregular text-green-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora.
          </Text>
          <CustomButton
            containerStyle="mt-7"
            isLoading={false}
            onPress={() => router.push("/sign-in")}
            title="Continue with Email"
          />
        </View>
      </ScrollView>

      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  )
}

export default MainApplication
