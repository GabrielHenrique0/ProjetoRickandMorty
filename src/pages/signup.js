import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

const SignUp = () => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInputMask
        style={styles.input}
        placeholder="Telefone"
        type="cel-phone"
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInputMask
        style={styles.input}
        placeholder="CPF"
        type="cpf"
        value={cpf}
        onChangeText={setCPF}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Picker
        style={styles.picker2}
        selectedValue={curso}
        onValueChange={(itemValue) => setCurso(itemValue)}
      >
        <Picker.Item styles='borderColor: #f00' label="Selecione um curso..."/>
        <Picker.Item label="Desenvolvimento de Software Multiplataforma" value="Desenvolvimento de Software Multiplataforma" />
        <Picker.Item label="Análise e Desenvolvimento de Software" value="Análise e Desenvolvimento de Software" />
        <Picker.Item label="Gestão de Produção Industrial" value="Gestão de Produção Industrial" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C3E44',
  }, 
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  picker2: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 1,
    marginVertical: 10,
    width: '80%',
    color: '#ccc',
  }, 
  button: {
    backgroundColor: '#272B33',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default SignUp;
