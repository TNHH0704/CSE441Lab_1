import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const employeeInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  return (
    <View style={styles.container}>
      <Text>Employee Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <Text>Employee Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
      />
      <Text>Employee Occupation</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Occupation"
        value={occupation}
        onChangeText={setOccupation}
      />
      <View>
        <Button
          title="Submit"
          onPress={() => {
            alert(
              "Updated Employee Info Successfully"
            );
          }}
        />
      </View>
    </View>
  )
}

export default employeeInfo

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
