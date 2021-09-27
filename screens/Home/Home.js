import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native'

import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants'
import { HorizontalFoodCard } from '../../components'

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  )
}

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(1)
  const [menuList, setMenuList] = useState([])
  const [recommends, setRecommends] = useState([])

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  }, [])

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedRecommend = dummyData.menu.find(
      (item) => item.name === 'Recommended'
    )
    setRecommends(
      selectedRecommend.list.filter((item) =>
        item.categories.includes(categoryId)
      )
    )

    let selectedMenu = dummyData.menu.find(
      (menuItem) => menuItem.id === menuTypeId
    )
    setMenuList(
      selectedMenu.list.filter((item) => item.categories.includes(categoryId))
    )
  }

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index === dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id)
              handleChangeCategory(selectedCategoryId, item.id)
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType === item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={icons.search}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        <TextInput
          style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
        />
        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderRecommendedSection = () => {
    return (
      <Section
        title='Recommended'
        onPress={() => console.log('show all recomend')}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index === 0 ? SIZES.padding : 18,
                marginRight:
                  index === recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{ marginTop: 35, height: 150, width: 150 }}
              item={item}
              onPress={() => console.log('horizontal food card')}
            />
          )}
        />
      </Section>
    )
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* search */}
      {renderSearch()}

      {/* list  */}
      <FlatList
        ListHeaderComponent={
          <View>
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
        data={menuList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('horizontal food card')}
            />
          )
        }}
      />
    </View>
  )
}

export default Home
