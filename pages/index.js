import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { ModalTokens } from '../components/modal';

export function Home() {
  const [qtde, setQtde] = useState("6");
  const [telaModal, setTelaModal] = useState(false);
  const [tarefaGerada, setTarefaGerada] = useState("");

  function gerarToken() {
    setTarefaGerada(qtde);
    setTelaModal(true);
  }

  return (
    <View style={ESTILO.container}>
      <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
      <Text style={ESTILO.caracteres}>
        Tarefa: {qtde}
      </Text>

      <View style={ESTILO.area}>
        <TextInput
          style={ESTILO.input}
          onChangeText={setQtde}
          value={qtde}
          placeholder="Nome da tarefa"
        />
      </View>
      <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
        <Text style={ESTILO.buttonText}>
          Gerar tarefa
        </Text>
      </TouchableOpacity>
      <Modal visible={telaModal} animationType="fade" transparent={true}>
        <ModalTokens handleClose={() => setTelaModal(false)} tarefa={tarefaGerada} />
      </Modal>
    </View>
  )
}

const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8
  },
  button: {
    backgroundColor: "#802BED",
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: "#FFF",
  },
  caracteres: {
    fontSize: 30,
    fontWeight: "bold",
  }
})
