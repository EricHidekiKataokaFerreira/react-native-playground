import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bubble from "../App/Creativity/Views/Bubble";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Creativity from "../App/Creativity/Views/Creativity";
import Components from "../App/Components/Components";

import { MaterialIcons } from '@expo/vector-icons';
import { CreativityRoutes } from "../App/Creativity/routes/creativity.routes";

const {Screen, Navigator} = createBottomTabNavigator()

export function TabRoutes () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name ='criativity' 
        options={{
          tabBarLabel: 'Criatividade',
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      >
        {() => <CreativityRoutes />}
      </Screen>
      <Screen 
        name="components" 
        options={{
          tabBarLabel: 'Componentes',
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons
              name='account-box'
              color={color}
              size={size}
            />
          )
        }}
        component={Components} 
      />
    </Navigator>
  )
}