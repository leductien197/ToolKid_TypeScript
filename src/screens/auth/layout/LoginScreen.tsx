import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.main}>
            <Text>Login screen</Text>
        </View>
    )
};

export default LoginScreen

const styles = StyleSheet.create({
    main: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
