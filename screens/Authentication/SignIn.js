import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { AuthLayout } from '../'
import { FONTS, SIZES, COLORS, icons } from '../../constants'
import { FormInput } from '../../components'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPass, setShowPass] = useState(false)

  return (
    <AuthLayout subtitle={'Welcome back!'} title={"Lets's Sign You In"}>
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label='Email'
          keyboardType='email-address'
          autoCompleteType='email'
          onChange={(value) => {
            setEmail(value)
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={icons.correct}
                style={{ height: 20, width: 20, tintColor: COLORS.green }}
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
      </View>
    </AuthLayout>
  )
}
export default SignIn
