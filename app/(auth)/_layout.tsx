import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet } from "react-native"

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="sign-in" />
      <Stack.Screen options={{ headerShown: false }} name="sign-up" />
      <StatusBar style="light" backgroundColor="#161622" />
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
