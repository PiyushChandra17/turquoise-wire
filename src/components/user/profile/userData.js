import { View, Alert } from 'react-native'
import React, { useState, useCallback } from 'react'
import { TextInput,Button, Title } from 'react-native-paper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { showToast } from '../../../utils/tools'

import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, updateUserData } from '../../../store/actions'
import { useFocusEffect } from '@react-navigation/native'

const UserData = () => {
    const [loading,setLoading] = useState(false)
    const { user,error } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        setLoading(true)
        dispatch(updateUserData(values,user)).then(({ payload }) => {
            setLoading(false)

            if (payload.error) {
                showToast('error', 'Oops !!', 'Try again later')
            } else {
                showToast('success', 'Congratulations', 'Your profile was updated')
            }
        })
        
    }

    useFocusEffect(
        useCallback(() => {
            return () => dispatch(clearAuthError())
        },[])
    )

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                name: user.name ? user.name : "",
                lastName: user.lastName ? user.lastName : "",
                age: user.age ? user.age : ""
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('The name is required'),
                lastName: Yup.string().required('The lastname is required'),
                age: Yup.number().required('The age is required')
            })}
            onSubmit={ values => handleSubmit(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                <View style={{ padding: 20 }}>
                    <Title>About you</Title>
                    <TextInput 
                        label="name"
                        mode="flat"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        error={errors.name && touched.name ? true : false }

                    />
                    <TextInput 
                        label="lastName"
                        mode="flat"
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                        error={errors.lastName && touched.lastName ? true : false }
                    />
                    <TextInput 
                        label="age"
                        mode="flat"
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        error={errors.age && touched.age ? true : false }
                    />
                    <Button
                        disabled={loading}
                        loading={loading}
                        mode="contained"
                        onPress={handleSubmit}
                    >
                        Update
                    </Button>
                </View>
            )}
        </Formik>
    )
}

export default UserData
