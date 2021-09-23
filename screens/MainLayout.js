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

import { Home, Search, CartTab, Favorite, Notification } from '../screens'
import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants'
import { setSelectedTab } from '../stores/tab/tabAction'
import { Header } from '../components'

const MainLayout = ({
  drawerAnimationStyle,
  startDrawerAnim,
  endDrawerAnim,
  navigation,
}) => {
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab)
  const dispatch = useDispatch()
  const isDrawerOpen = useDrawerStatus() === 'open'

  useEffect(() => {
    if (isDrawerOpen) {
      startDrawerAnim()
    } else {
      endDrawerAnim()
    }
  }, [isDrawerOpen])
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
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>MainLayout file</Text>
      </View>

      {/* Footer */}
    </Animated.View>
  )
}

export default MainLayout
