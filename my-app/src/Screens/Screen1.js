import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
    const handleLogout = () => {
    navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 1</Text>
            <Button title="LogOut" onPress={handleLogout} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Screen1;