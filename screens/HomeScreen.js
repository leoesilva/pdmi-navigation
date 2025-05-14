import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Bem-vindo ao XPTO App</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Esta é a tela inicial do aplicativo. Você pode navegar para outras
            telas usando os botões abaixo.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Detalhes")}
          >
            <Text style={styles.buttonText}>Detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Contato")}
          >
            <Text style={styles.buttonText}>Contato</Text>
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
