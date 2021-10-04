import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import { FONTS, COLORS, SIZES, icons, images } from '../../constants'
import { Header, IconButton, CartQtyButton, IconLabel } from '../../components'

const FoodDetail = ({ navigation, route: { params } }) => {
  const { foodItem } = params

  const renderDetails = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* calories & favorite  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.calories}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodItem.calories} calories
              </Text>
            </View>

            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem.isFavorite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* food image  */}
          <Image
            source={foodItem.image}
            resizeMode='contain'
            style={{ height: 170, width: '100%' }}
          />
        </View>

        {/* food info  */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h1 }}>{foodItem.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.gray,
              textAlign: 'justify',
              ...FONTS.body3,
            }}
          >
            {foodItem.description}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding }}>
            {/* ratings  */}
            <IconLabel
              containerStyle={{ backgroundColor: COLORS.primary }}
              icon={icons.star}
              label='4.5'
              labelStyle={{ color: COLORS.white }}
            />
            {/* duration  */}
            {/* shipping  */}
          </View>
        </View>
      </View>
    )
  }

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
            onPress={() => navigation.goBack()}
          />
        }
        rightContent={<CartQtyButton quantity={3} />}
      />

      {/* body  */}
      <ScrollView>{renderDetails()}</ScrollView>
    </View>
  )
}

export default FoodDetail
