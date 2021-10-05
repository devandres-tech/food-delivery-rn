import React from 'react'
import { View, Text, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { TextButton, LineDivider } from '../components'
import { FONTS, COLORS, SIZES } from '../constants'

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: SIZES.padding,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1, ...FONTS.body3 }}>Subtotal</Text>
          <Text style={{ ...FONTS.h3 }}>${subTotal.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  )
}

export default FooterTotal
