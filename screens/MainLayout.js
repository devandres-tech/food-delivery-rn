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

const TabButton = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={{
            flexDirection: 'row',
            width: '80%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
          }}
        >
          <Image
            source={icon}
            style={{ width: 20, height: 20, tintColor: COLORS.gray }}
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

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

        backgroundColor: COLORS.white,
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
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* Tabs  */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.home))}
            label={constants.screens.home}
            icon={icons.home}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.search))}
            label={constants.screens.search}
            icon={icons.search}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
            label={constants.screens.cart}
            icon={icons.cart}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.favorite))}
            label={constants.screens.favorite}
            icon={icons.favorite}
          />
          <TabButton
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.notification))
            }
            label={constants.screens.notification}
            icon={icons.notification}
          />
        </View>
      </View>
    </Animated.View>
  )
}

export default MainLayout
