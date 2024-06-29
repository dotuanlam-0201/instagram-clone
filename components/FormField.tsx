import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

const FormField = ({
  title,
  placeholder,
  otherStyles = "",
}: {
  title: string
  placeholder?: string
  otherStyles?: string
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false)

  return (
    <View className={`w-full space-y-2 ${otherStyles}`}>
      <Text className="text-base text-white text-grey-100 font-pregular">
        {title}
      </Text>

      <View className="hover:border-secondary flex-row flex-g items-center justify-center border-2 border-black-200 focus:border-secondary w-full h-16 px-4 bg-black-100 rounded-2xl">
        <TextInput
          className="text-base flex-1 text-white font-semibold"
          placeholder={placeholder}
          secureTextEntry={visiblePassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            className="p-4"
            onPress={() => setVisiblePassword(!visiblePassword)}
          >
            <Ionicons
              size={20}
              color={"white"}
              name={visiblePassword ? "eye-off" : "eye"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})
