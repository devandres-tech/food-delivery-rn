import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import SplashScreen from 'react-native-splash-screen'

import rootReducer from './stores/rootReducer'
import CustomDrawer from './navigation/CustomDrawer'
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
} from './screens'

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createNativeStackNavigator()

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Home'
        >
          <Stack.Screen name='Otp' component={Otp} />
          <Stack.Screen name='OnBoarding' component={OnBoarding} />
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='Home' component={CustomDrawer} />
          <Stack.Screen name='FoodDetail' component={FoodDetail} />
          <Stack.Screen name='Checkout' component={Checkout} />
          <Stack.Screen name='MyCart' component={MyCart} />
          <Stack.Screen name='Success' component={Success} />
          <Stack.Screen name='AddCard' component={AddCard} />
          <Stack.Screen name='MyCard' component={MyCard} />
          <Stack.Screen name='DeliveryStatus' component={DeliveryStatus} />
          <Stack.Screen name='Map' component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
