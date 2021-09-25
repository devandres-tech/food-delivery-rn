import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    />
  )
}

export default HorizontalFoodCard
