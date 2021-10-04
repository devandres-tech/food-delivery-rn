import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import { FONTS, COLORS, SIZES, icons, dummyData, images } from '../../constants'
import {
  Header,
  IconButton,
  CartQtyButton,
  IconLabel,
  TextButton,
  LineDivider,
} from '../../components'

const FoodDetail = ({ navigation, route: { params } }) => {
  const { foodItem } = params
  const [selectedSize, setSelectedSize] = useState('')

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
          {/* ratings  */}
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding }}>
            <IconLabel
              containerStyle={{ backgroundColor: COLORS.primary }}
              icon={icons.star}
              label='4.5'
              labelStyle={{ color: COLORS.white }}
            />
            {/* duration  */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              label='30 mins'
              labelStyle={{ tintColor: COLORS.black }}
            />
            {/* shipping  */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              label='Free shipping'
              labelStyle={{ tintColor: COLORS.black }}
            />
          </View>

          {/* sizes  */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding,
              alignItems: 'center',
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes:</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => (
                <TextButton
                  key={`sizes-${index}`}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize === item.id ? COLORS.primary : COLORS.gray2,
                    backgroundColor:
                      selectedSize === item.id ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize === item.id ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderRestaurant = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}
      >
        <Image
          source={images.profile}
          style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}
        >
          <Text style={{ ...FONTS.h3 }}>By Andres</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            1.2 KM away from you
          </Text>
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
      <ScrollView>
        {renderDetails()}
        <LineDivider />
        {renderRestaurant()}
      </ScrollView>
    </View>
  )
}

export default FoodDetail
