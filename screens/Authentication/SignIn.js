import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { AuthLayout } from '../'
import { FONTS, SIZES, COLORS, icons } from '../../constants'
import { FormInput, CustomSwitch, TextButton } from '../../components'
import { utils } from '../../utils'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [saveMe, setSaveMe] = useState(false)

  const isEnabledSignIn = () => {
    return email !== '' && password !== '' && emailError === ''
  }

  return (
    <AuthLayout subtitle={'Welcome back!'} title={"Lets's Sign You In"}>
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
        <FormInput
          label='password'
          secureTextEntry={!showPass}
          autoCompleteType='password'
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label='Forgot Password'
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        <TextButton
          label='Sing In'
          disabled={isEnabledSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
        />
      </View>
    </AuthLayout>
  )
}
export default SignIn
