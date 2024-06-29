import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const CustomButton = ({
  title,
  onPress,
  isLoading,
  containerStyle,
  textStyle,
}: {
  title: string
  onPress: () => void
  isLoading: boolean
  containerStyle?: string
  textStyle?: string
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-secondary rounded-xl min-h-[62px] w-full items-center justify-center ${containerStyle}
        ${isLoading ? "opacity-50" : ""}
        `}
    >
      <Text className={`text-primary font-psemibold ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
