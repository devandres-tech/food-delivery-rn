import React from 'react'
import { View, Text, ImageBackground, Image, Animated } from 'react-native'

import { constants, images, FONTS, SIZES, COLORS } from '../../constants'

const Dots = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {constants.onboarding_screens.map((item, index) => {
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: 10,
              height: 10,
              backgroundColor: COLORS.primary,
            }}
          ></Animated.View>
        )
      })}
    </View>
  )
}

const OnBoarding = () => {
  const renderHeaderLogo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode='contain'
          style={{ width: SIZES.width * 0.5, height: 100 }}
        />
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <View style={{ height: 160 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Dots />
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
      {renderHeaderLogo()}
      <Animated.FlatList
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SIZES.width }}>
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: index === 1 ? '89%' : '100%',
                    width: '100%',
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode='contain'
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          )
        }}
      />

      {renderFooter()}
    </View>
  )
}

export default OnBoarding
