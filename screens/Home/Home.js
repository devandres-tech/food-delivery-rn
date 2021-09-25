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

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(1)
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  }, [])

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedMenu = dummyData.menu.find(
      (menuItem) => menuItem.id === menuTypeId
    )
    console.log('selected menu', selectedMenu)
    setMenuList(
      selectedMenu.list.filter((item) => item.categories.includes(categoryId))
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
