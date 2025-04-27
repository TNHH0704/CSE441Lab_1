import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const minOfThree = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const checkMin = () => {
        const number1 = parseInt(num1);
        const number2 = parseInt(num2);
        const number3 = parseInt(num3);
        if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
            alert("Please enter valid numbers");
            return;
        }
        const minNumber = Math.min(number1, number2, number3);
        alert(`The minimum of the three numbers is: ${minNumber}`);
    }
    return (
        <View style={styles.container}>
            <Text>Enter Three Numbers</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter First Number"
                value={num1}
                onChangeText={setNum1}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Second Number"
                value={num2}
                onChangeText={setNum2}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Third Number"
                value={num3}
                onChangeText={setNum3}
            />
            <View>
                <Button
                    title="Submit"
                    onPress={() => {checkMin();}}
                />
            </View>
        </View>
    )
}

export default minOfThree

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