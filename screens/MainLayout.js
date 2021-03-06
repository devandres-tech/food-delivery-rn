import React, { useEffect, useRef } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native'
import { useDrawerStatus, useDrawerProgress } from '@react-navigation/drawer'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import { Home, Search, CartTab, Favorite, Notification } from '../screens'
import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants'
import { setSelectedTab } from '../stores/tab/tabAction'
import { Header } from '../components'

const TabButton = ({
  label,
  icon,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: isFocused ? COLORS.white : COLORS.gray,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const MainLayout = ({ navigation }) => {
  const flatListRef = useRef()
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab)
  const progress = useDrawerProgress()
  const dispatch = useDispatch()

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  })

  const animatedStyle = { borderRadius, transform: [{ scale: scale }] }

  // reanimated shared values
  const homeTabFlex = useSharedValue(1)
  const homeTabColor = useSharedValue(COLORS.white)
  const searchTabFlex = useSharedValue(1)
  const searchTabColor = useSharedValue(COLORS.white)
  const cartTabFlex = useSharedValue(1)
  const cartTabColor = useSharedValue(COLORS.white)
  const favoriteTabFlex = useSharedValue(1)
  const favoriteTabColor = useSharedValue(COLORS.white)
  const notificationTabFlex = useSharedValue(1)
  const notificationTabColor = useSharedValue(COLORS.white)
  // reanimated animated style
  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value }
  })
  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value }
  })
  const searchFlexStyle = useAnimatedStyle(() => {
    return { flex: searchTabFlex.value }
  })
  const searchColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: searchTabColor.value }
  })
  const cartFlexStyle = useAnimatedStyle(() => {
    return { flex: cartTabFlex.value }
  })
  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value }
  })
  const favoriteFlexStyle = useAnimatedStyle(() => {
    return { flex: favoriteTabFlex.value }
  })
  const favoriteColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: favoriteTabColor.value }
  })
  const notificationFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationTabFlex.value }
  })
  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value }
  })

  useEffect(() => {
    dispatch(setSelectedTab(constants.screens.home))
  }, [dispatch])

  useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef.current.scrollToIndex({ index: 0, animated: false })
      homeTabFlex.value = withTiming(4, { duration: 500 })
      homeTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      })
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 })
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
    if (selectedTab === constants.screens.search) {
      flatListRef.current.scrollToIndex({ index: 1, animated: false })
      searchTabFlex.value = withTiming(4, { duration: 500 })
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 })
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
    if (selectedTab === constants.screens.cart) {
      flatListRef.current.scrollToIndex({ index: 2, animated: false })
      cartTabFlex.value = withTiming(4, { duration: 500 })
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 })
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
    if (selectedTab === constants.screens.favorite) {
      flatListRef.current.scrollToIndex({ index: 3, animated: false })
      favoriteTabFlex.value = withTiming(4, { duration: 500 })
      favoriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      favoriteTabFlex.value = withTiming(1, { duration: 500 })
      favoriteTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
    if (selectedTab === constants.screens.notification) {
      flatListRef.current.scrollToIndex({ index: 4, animated: false })
      notificationTabFlex.value = withTiming(4, { duration: 500 })
      notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 })
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
  }, [selectedTab])

  return (
    <Animated.View
      style={{
        flex: 1,

        backgroundColor: COLORS.white,
        ...animatedStyle,
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
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: SIZES.height, width: SIZES.width }}>
                {item.label === constants.screens.home && (
                  <Home navigation={navigation} />
                )}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <CartTab />}
                {item.label === constants.screens.favorite && <Favorite />}
                {item.label === constants.screens.notification && (
                  <Notification />
                )}
              </View>
            )
          }}
        />
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
            isFocused={selectedTab === constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.search))}
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab === constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
          />
          <TabButton
            onPress={() => dispatch(setSelectedTab(constants.screens.favorite))}
            label={constants.screens.favorite}
            icon={icons.favorite}
            isFocused={selectedTab === constants.screens.favorite}
            outerContainerStyle={favoriteFlexStyle}
            innerContainerStyle={favoriteColorStyle}
          />
          <TabButton
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.notification))
            }
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
          />
        </View>
      </View>
    </Animated.View>
  )
}

export default MainLayout
