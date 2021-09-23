import React, { useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabAction'

import MainLayout from '../screens/MainLayout'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
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

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
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
          <CustomDrawerItem
            onPress={() => {
              setSelectedTab(constants.screens.home)
              navigation.navigate('MainLayout')
            }}
            isFocused={selectedTab === constants.screens.home}
            label={constants.screens.home}
            icon={icons.home}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            onPress={() => {
              setSelectedTab(constants.screens.notification)
              navigation.navigate('MainLayout')
            }}
            isFocused={selectedTab === constants.screens.notification}
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            onPress={() => {
              setSelectedTab(constants.screens.favorite)
              navigation.navigate('MainLayout')
            }}
            isFocused={selectedTab === constants.screens.favorite}
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
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab)
  const drawerAnim = useRef(new Animated.Value(0)).current
  const dispatch = useDispatch()

  const scale = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })

  const borderRadius = drawerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 26],
  })

  const animatedStyle = { borderRadius, transform: [{ scale }] }

  const endDrawerAnim = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }

  const startDrawerAnim = () => {
    Animated.timing(drawerAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }

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
        backBehavior='none'
        initialRouteName='MainLayout'
        drawerContent={(props) => {
          return (
            <CustomDrawerContent
              selectedTab={selectedTab}
              setSelectedTab={(onTabSelected) =>
                dispatch(setSelectedTab(onTabSelected))
              }
              navigation={props.navigation}
            />
          )
        }}
      >
        <Drawer.Screen name='MainLayout'>
          {(props) => (
            <MainLayout
              startDrawerAnim={startDrawerAnim}
              endDrawerAnim={endDrawerAnim}
              drawerAnimationStyle={animatedStyle}
              {...props}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer
