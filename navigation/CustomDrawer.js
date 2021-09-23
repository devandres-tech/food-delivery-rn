import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'

import MainLayout from '../screens/MainLayout'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
      }}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      {/* close btn */}
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            style={{ alignItems: 'flex-start', justifyContent: 'center' }}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* drawer items */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favorite}
            icon={icons.favorite}
          />

          {/* line divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label={'Track Your Order'} icon={icons.location} />
          <CustomDrawerItem label={'Coupons'} icon={icons.coupon} />
          <CustomDrawerItem label={'Settings'} icon={icons.setting} />
          <CustomDrawerItem label={'Invite a Friend'} icon={icons.profile} />
          <CustomDrawerItem label={'Help Center'} icon={icons.help} />
        </View>

        {/* logout container */}
        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem label={'logout'} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

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
        drawerContent={(props) => (
          <CustomDrawerContent navigation={props.navigation} />
        )}
      >
        <Drawer.Screen name='MainLayout'>
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}
export default CustomDrawer
