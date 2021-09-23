import React from 'react'
import { View, Text } from 'react-native'
import { FONTS } from '../constants'

const Header = ({ containerStyle, title, leftContent, rightContent }) => {
  return (
    <View style={{ flexDirection: 'row', ...containerStyle }}>
      {/* Left */}
      {leftContent}

      {/* Title */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ ...FONTS.h3 }}>{title.toUpperCase()}</Text>
      </View>

      {/* Right */}
      {rightContent}
    </View>
  )
}

export default Header
