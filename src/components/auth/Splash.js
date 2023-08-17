import React from 'react'
import { ActivityIndicator,View, StyleSheet } from 'react-native'
import { Colors } from '../../utils/tools'

const Splash = () => (
    <View style={styles.contentContainer}>
        <ActivityIndicator />
    </View>
)

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.turquoise,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Splash