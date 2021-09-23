import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './stores/rootReducer'
import CustomDrawer from './navigation/CustomDrawer'

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Home'
        >
          <Stack.Screen name='Home' component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
