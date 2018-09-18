import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    render(){
        return (
        <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name='ios-rainy' />
                <Text style={styles.temp}>35</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>Rainny</Text>
                <Text style={styles.subtitle}>우산챙기세요!</Text>
            </View>
        </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24,
    }
})