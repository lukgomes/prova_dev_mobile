import React, { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  function onChanged (text: string) {
    setInput2(
      text.replace(/[^0-9]/g, '')
    );
  }

  function onChanged3 (text: string) {
    setInput3(
      text.replace(/[^0-9]/g, '')
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prova Mobile</Text>

      <Text style={styles.textLabel}>Input1</Text>
      <TextInput onChangeText={setInput1} style={styles.textInputs} />

      <Text style={styles.textLabel}>Input2</Text>
      <TextInput onChangeText={onChanged} value={input2} keyboardType="numeric" style={styles.textInputs} />

      <Text style={styles.textLabel}>Input3</Text>
      <TextInput onChangeText={onChanged3} value={input3} keyboardType="numeric" style={styles.textInputs} />


      <Text>Texto 1 = {input1}</Text>
      <Text>Number 1 = {input2}</Text>
      <Text>Number 2 = {input3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 30,
  },

  textLabel: {
    fontSize: 15,
  },

  textInputs: {
    borderWidth: 1,
    width: 350
  }
});