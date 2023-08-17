import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState, useCallback, useEffect} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { registerUser,clearAuthError, loginUser } from '../../store/actions'
import { useFocusEffect } from '@react-navigation/native'

import { Input, Button} from 'react-native-elements'
import { LogoText,Colors, showToast } from '../../utils/tools'

import Toast from 'react-native-toast-message'

const AuthScreen = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.auth)

  const [formType,setFormType] = useState(true)
  const [secureEntry, setSecureEntry] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    setLoading(true)
    if (formType) {
      // Register
      dispatch(registerUser(values))
    } else {
      // Sign in
      dispatch(loginUser(values))
    }
  }

  useEffect(() => {
    if (error) {
      showToast('error', 'Sorry', error)
      setLoading(false)
    }
  },[error])

  useFocusEffect(
    useCallback(() => {
      return () => dispatch(clearAuthError())
    },[])
  )

  return ( 
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <LogoText />
        <Formik
          initialValues={{ email: 'piyushblr5@gmail.com', password: 'testing123' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email')
              .required('The email is required'),
            password: Yup.string()
              .max(10, 'Must be 10 or less')
              .required('The password is required')
        })}

        onSubmit={values => handleSubmit(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
            <>
              <Input 
                placeholder='Email'
                leftIcon={{ type: 'antdesign', name: 'mail', color: Colors.white }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.black}
                inputContainerStyle={styles.inputContainerStyle}

                renderErrorMessage={errors.email && touched.email }
                errorMessage={errors.email}
                errorStyle={{ color: Colors.black }}

                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                values={values.email}
              />
              <Input 
                placeholder='Password'
                secureTextEntry={secureEntry}
                leftIcon={{ type: 'antdesign', name: 'lock', color: Colors.white }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.black}
                inputContainerStyle={styles.inputContainerStyle}
                rightIcon={{
                  type: 'antdesign',
                  name: secureEntry ? 'eye' : 'eyeo',
                  onPress: () => setSecureEntry(!secureEntry)
                }}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                values={values.password}

                renderErrorMessage={errors.password && touched.password }
                errorMessage={errors.password}
                errorStyle={{ color: Colors.black }}
              />

              <Button 
                title={formType ? 'Register' : 'Login' }
                buttonStyle={{
                  backgroundColor: Colors.black,
                  marginTop: 20
                }}
                titleStyle={{ width: "100%" }}
                onPress={handleSubmit}
                loading={loading}
              />
              <Button 
                title={`${!formType ? 'Already Registered?' : 'Need to sign in?'}`}
                buttonStyle={{
                  backgroundColor: Colors.black,
                  marginTop: 20
                }}
                titleStyle={{ width: "100%", color: Colors.white }}
                onPress={() => setFormType(!formType)}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.turquoise
  },
  container: {
    padding: 50,
    alignItems: 'center'
  },
  inputStyle: {
    fontSize: 15,
    color: Colors.white
  },
  inputContainerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.black
  }

})

export default AuthScreen

