import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { Meal } from "@screens/Meal"
import { Register } from "@screens/Register"
import { Response } from "@screens/Response"
import { Statistics } from "@screens/Statistics"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="statistics"
        component={Statistics}
      />

      <Screen 
        name="register"
        component={Register}
      />

      <Screen 
        name="response"
        component={Response}
      />

      <Screen 
        name="meal"
        component={Meal}
      />
    </Navigator>
  )
}