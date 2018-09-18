import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00c6f8','#005bea'],
        title: "비가옵니다",
        subtitle: '우산을 챙기세요!',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#fef253','#ff7300'],
        title: "맑습니다",
        subtitle: '나들이를 나가보세요!',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ecbc','#007adf'],
        title: "천둥이 쳐요",
        subtitle: '천둥을 맞으면 로또를..!',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#d7d2cc','#304352'],
        title: "흐립니다",
        subtitle: '우중충해도 시원할거예요!',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7de2fc','#b9b6e5'],
        title: "눈이옵니다",
        subtitle: '눈사람을 만들어보아요!!',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89f7fe','#66a6ff'],
        title: "이슬비가옵니다",
        subtitle: '비가 많이오지 않아 다행!',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89f7fe','#66a6ff'],
        title: "안개가 낀데요",
        subtitle: '항상 운전조심!',
        icon: 'weather-windy'
    },
    Mist: {
        colors: ['#d7d2cc','#304352'],
        title: "옅은 안개가 껴요",
        subtitle: '신비로운 이느낌..!',
        icon: 'weather-fog'
    },
}

function Weather({ temp, weatherName }){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

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