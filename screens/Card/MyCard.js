import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Header, IconButton, TextButton, CardItem } from '../../components'
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants'

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState({ key: '', id: '' })

  const renderMyCards = () => {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`my-card${item.id}`}
              item={item}
              isSelected={
                `${selectedCard.key}-${selectedCard.id}` === `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: 'MyCard' })}
            />
          )
        })}
      </View>
    )
  }

  const renderAddNewCard = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add new card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard.key}-${selectedCard.id}` ===
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: 'NewCard' })}
            />
          )
        })}
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
      <Header
        title='My Cards'
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
        rightContent={<View style={{ width: 40 }} />}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {renderMyCards()}
        {renderAddNewCard()}
      </ScrollView>

      {/* footer  */}
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          disabled={selectedCard.key === ''}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard.key === '' ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard.key === 'NewCard' ? 'Add' : 'Place your Order'}
        />
      </View>
    </View>
  )
}

export default MyCard
