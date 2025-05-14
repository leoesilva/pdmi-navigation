import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function DetailsScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Detalhes</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Esta é a tela de detalhes do aplicativo. Você pode voltar para a
            tela inicial usando o botão abaixo.
          </Text>
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
