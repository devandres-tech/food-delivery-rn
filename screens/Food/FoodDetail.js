import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../../constants'
import { Header, IconButton, CartQtyButton } from '../../components'

const FoodDetail = () => {
  console.log('icons', icons.back)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* header  */}
      <Header
        title='DETAILS'
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftContent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => console.log('goback')}
          />
        }
        rightContent={<CartQtyButton quantity={3} />}
      />
    </View>
  )
}

export default FoodDetail
