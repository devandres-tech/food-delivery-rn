import React, { useEffect } from 'react'
import { Text, Animated } from 'react-native'
import { useDrawerStatus } from '@react-navigation/drawer'

const MainLayout = ({
  drawerAnimationStyle,
  startDrawerAnim,
  endDrawerAnim,
}) => {
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
      <Text>MainLayout file</Text>
    </Animated.View>
  )
}

export default MainLayout
