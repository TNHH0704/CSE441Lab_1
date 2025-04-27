import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const sumFirstLast = () => {
    const [number, setNumber] = useState("");
    const calcSum = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            alert("Please enter a valid number");
            return;
        }
        const firstDigit = parseInt(number[0]);
        const lastDigit = parseInt(number[number.length - 1]);
        const sum = firstDigit + lastDigit;
        alert(`The sum of the first and last digit is: ${sum}`);
    }
    return (
        <View style={styles.container}>
            <Text>Enter A Number</Text>
            <TextInput
                style={styles.input}
                value={number}
                onChangeText={setNumber}
            />
            <View>
                <Button
                    title="Submit"
                    onPress={() => {
                        calcSum();
                    }}
                />
            </View>

        </View>
    )
}

export default sumFirstLast

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})