import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { icons, COLORS } from '../constants'

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
        source={icons.star}
      />
      <Image
        style={{
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
        source={icons.star}
      />
      <Image
        style={{
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
        source={icons.star}
      />
      <Image
        style={{
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
        source={icons.star}
      />
      <Image
        style={{
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
        source={icons.star}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
})

export default Rating
