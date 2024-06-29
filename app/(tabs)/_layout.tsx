import { Feather, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import React, { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ReactNode
  color: string
  name: string
  focused: boolean
}) => {
  return (
    <View className="items-center">
      {icon}
      <Text
        style={{ color: color }}
        className={`
          mt-1 
          ${focused ? "font-extrabold" : "font-pregular"} text-xs`}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name={"Home"}
                icon={<Ionicons color={color} name="home" />}
                color={color}
                focused={focused}
              />
            ),
          }}
          name="home"
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name={"Bookmark"}
                icon={<Ionicons color={color} name="bookmark" />}
                color={color}
                focused={focused}
              />
            ),
          }}
          name="bookmark"
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name={"Create"}
                icon={<Ionicons color={color} name="add-circle-sharp" />}
                color={color}
                focused={focused}
              />
            ),
          }}
          name="create"
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name={"Profile"}
                icon={<Feather name="user" color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
          name="profile"
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})
