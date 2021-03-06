import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    Suas Plantas de {'\n'}
                    Forma Fácil 
                </Text>
                <Image style={styles.imagem} source={wateringImg} resizeMode="contain"/>
                <Text style={styles.subtitle}>
                    Não esqueca mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text ><Feather name="chevron-right" style={styles.buttonIcon}/></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 38,
        lineHeight: 48,
    },
    imagem: {
        height: Dimensions.get('window').width * 0.7,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        marginTop: 30,
    },
    buttonIcon: {
        fontSize: 28,
        color: colors.white
    }
})