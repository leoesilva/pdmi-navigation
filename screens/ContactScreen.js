import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function ContactScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Contato</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Esta é a tela de contato do aplicativo. Você pode enviar uma
            mensagem usando o formulário abaixo.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.inputLabel}>Nome:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu nome"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>E-mail:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Mensagem:</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Digite sua mensagem"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity
            style={styles.formButtonContainer}
            onPress={() => Alert.alert("Sucesso", "Mensagem enviada!")}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  formContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textarea: {
    height: 100,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  formButtonContainer: {
    backgroundColor: "#007BBB",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
