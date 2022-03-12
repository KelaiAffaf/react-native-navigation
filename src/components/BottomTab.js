import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import HomeScreen from "../../src/screens/Home";
import SettingsScreen from "../../src/screens/Seetings";
import DetailsScreen from "../../src/screens/Details";
import ScreenOne from "../navigations/ScreeOne";

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={ScreenOne}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <View>
              <Text
                style={{
                  fontSize: size,
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                🏠
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <View>
              <Text
                style={{
                  fontSize: size,
                  color: color,
                  fontWeight: "bold",
                }}
              >
                ⚙️
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color, size }) => (
            <View>
              <Text
                style={{
                  fontSize: size,
                  color: color,
                  fontWeight: "bold",
                }}
              >
                🔎
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
