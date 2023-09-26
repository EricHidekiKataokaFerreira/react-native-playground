import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Creativity from "../Views/Creativity";
import Bubble from "../Views/Bubble";

export type StackParamList = {
  criativityList: undefined
  bubble: undefined
}

export type StackTypes = NativeStackNavigationProp<StackParamList>;

const {Screen, Navigator} = createNativeStackNavigator()
export function CreativityRoutes () {
  
  return (
    <Navigator>
      <Screen 
        name='criativityList' 
        options={{
          headerTitle: 'Testes criativos'
        }}
        component={Creativity}
      />

      <Screen
        name="bubble"
      >
        {() => <Bubble/>}
      </Screen>
    </Navigator>
  )
}