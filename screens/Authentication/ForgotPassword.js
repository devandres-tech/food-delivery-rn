import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { AuthLayout } from '../'
import { FONTS, SIZES, COLORS, icons } from '../../constants'
import { FormInput, TextButton } from '../../components'
import { utils } from '../../utils'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const isEnabledSendEmail = () => {
    return email !== '' && emailError === ''
  }

  return (
    <AuthLayout
      title='Password Recovery'
      subtitle='Please enter your email address to recover your password'
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label='Email'
          keyboardType='email-address'
          autoCompleteType='email'
          onChange={(value) => {
            utils.validateEmail(value, setEmailError)
            setEmail(value)
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ''
                      ? COLORS.gray
                      : email !== '' && emailError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>

      <TextButton
        label='Send Email'
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnabledSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        disabled={isEnabledSendEmail() ? false : true}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  )
}

export default ForgotPassword
