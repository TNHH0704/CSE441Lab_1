import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const hailstoneSequence = () => {
    const [number, setNumber] = useState("");

    const hailstoneSequence = () => {
        let num = parseInt(number);
        if (isNaN(num)) {
            alert("Please enter a valid number");
            return;
        }
        let sequence = [];
        while (num !== 1) {
            sequence.push(num);
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = 3 * num + 1;
            }
        }
        sequence.push(1);
        alert(`The Hailstone sequence is: ${sequence.join(", ")}`);
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
                    onPress={() => {hailstoneSequence();}}
                />
            </View>
        </View>

    )
}

export default hailstoneSequence

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