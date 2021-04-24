import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Button } from '../componets/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {

    const [name, setName] = useState<string>('');

    const [isFilled, setIsFilled] = useState(false);

    const [isFocused, setIsFocused] = useState(false);

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!! name);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS == "ios" ? "padding" : "height"} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😆' : '😃'}
                                </Text>
                                <Text style={styles.title}>Como Podemos {'\n'} Te Chamar?</Text>
                            </View>
                            <TextInput 
                                placeholder="Digite seu Nome"
                                style={
                                    [
                                        styles.input,
                                        (isFocused || isFilled ) && { borderColor: colors.green}
                                    ]
                                }
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button title={'Confimar'}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    }, 
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 58,
        padding: 10,
        textAlign: 'center',
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
});