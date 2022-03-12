// 1. install bottomTabBar : npm install react-native-bottom-tab-navigator
// 2. import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// 3. create bottomTabNavigator : const Tab = createBottomTabNavigator();
// 4. import screens : import HomeScreen from "./src/screens/Home";
// 5. implement bottomTabNavigator routes :
// <Tab.Navigator>
// <Tab.Screen
//   name="Home"
//   component={HomeScreen}
//   options={{
//     tabBarLabel: "Home",
//     tabBarIcon: ({ color, size }) => (
//       <View>
//         <Text
//           style={{
//             fontSize: size,
//             color: color,
//             fontWeight: "bold",
//           }}
//         >
//           🏠
//         </Text>
//       </View>
//     ),
//   }}
// />
// <Tab.Screen
//   name="Settings"
//   component={SettingsScreen}
//   options={{
//     tabBarLabel: "Settings",
//     tabBarIcon: ({ color, size }) => (
//       <View>
//         <Text
//           style={{
//             fontSize: size,
//             color: color,
//             fontWeight: "bold",
//           }}
//         >
//           ⚙️
//         </Text>
//       </View>
//     ),
//   }}
// />
// </Tab.Navigator>;
//
