import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Icon, { IconName } from "@/components/ui/icons/icon";

const platformType = Platform.OS === "android" ? "android" : "ios";

export const tabs: {
  name: string;
  id: string;
  icon: IconName;
  displayName: string;
}[] = [
  {
    name: "Explore",
    id: "index",
    icon: "search",
    displayName: "Explore",
  },
  {
    name: "Wishlist",
    id: "wishlist",
    icon: "heart",
    displayName: "Wishlist",
  },
  {
    name: "Inbox",
    id: "inbox",
    icon: "message",
    displayName: "Inbox",
  },

  {
    name: "Trips",
    id: "trips",
    icon: "airbnb",
    displayName: "Trips",
  },

  {
    name: "Profile",
    id: "profile",
    icon: "userCircle",
    displayName: "Profile",
  },
];

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      className="flex-row items-center justify-between px-4 bg-white bg-main border-t border-t-[#D8DCE0]"
      style={{
        paddingBottom: platformType == "ios" ? 4 : 2,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const buttonName = tabs.find((tab) => tab.name === label)?.displayName;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.8}
            className="items-center justify-between p-4 "
          >
            {BottomBarIcon(route.name, isFocused)}

            <Text
              className={`text-xs tracking-[-0.24px] ${
                isFocused
                  ? "text-primary-70 font-AirbnbCerealMedium"
                  : "text-[#717375] font-AirbnbCerealBook "
              }`}
            >
              {buttonName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomBarIcon = (name: string, isFocused: boolean) => {
  const iconName = tabs.find((tab) => tab.id === name)?.icon as IconName;
  return <Icon icon={iconName} stroke={isFocused ? "#D42F4D" : "#717375"} />;
};
export default TabBar;
