import React, { useEffect } from 'react'
import {
  Text,
  Animated,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native'
import { useDrawerStatus } from '@react-navigation/drawer'
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import { Home, Search, CartTab, Favorite, Notification } from '../screens'
import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants'
import { setSelectedTab } from '../stores/tab/tabAction'
import { Header } from '../components'

const MainLayout = ({
  drawerAnimationStyle,
  onOpenDrawerAnimation,
  onCloseDrawerAnimation,
  navigation,
}) => {
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab)
  const dispatch = useDispatch()
  const isDrawerOpen = useDrawerStatus() === 'open'

  useEffect(() => {
    if (isDrawerOpen) {
      onOpenDrawerAnimation()
    } else {
      onCloseDrawerAnimation()
    }
  }, [isDrawerOpen])

  useEffect(() => {
    dispatch(setSelectedTab(constants.screens.home))
  }, [dispatch])

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab}
        leftContent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightContent={
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={dummyData.myProfile.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>MainLayout file</Text>
      </View>

      {/* Footer */}
      <View style={{ height: 100, justifyContent: 'flex-end' }}>
        {/* Shadow */}
        {/* <LinearGradient start={{}} /> */}
      </View>
    </Animated.View>
  )
}

export default MainLayout
