// steps to use react native navigator stack
// 1. install react-navigator-stackv : npm install react-navigator-stack
// App.js:
// 2. import { createStackNavigator } from "@react-navigation/stack";
// 3. create stack navigator : const Stack = createStackNavigator();
// 4. import { NavigationContainer } from "@react-navigation/native";
// 5.create screens : import { HomeScreen, DetailsScreen, SettingsScreen } from "./src/screens";
// 6. implement Stack routes :
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerStyle: {
          backgroundColor: "#00AFAF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: "Details",
        headerStyle: {
          backgroundColor: "#00AFAF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
</NavigationContainer>;
