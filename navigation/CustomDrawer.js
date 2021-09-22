import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'

import MainLayout from '../screens/MainLayout'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        screenOptions={{
          overlayColor: 'transparent',
          drawerType: 'slide',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            drawerType: 'slide',
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: { backgroundColor: 'transparent' },
          headerShown: false,
        }}
        initialRouteName='MainLayout'
      >
        <Drawer.Screen name='MainLayout'>
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}
export default CustomDrawer
