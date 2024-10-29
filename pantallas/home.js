import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BluetoothManager from "./BluetoothManager";  // Asegúrate de que la ruta es correcta

const SpotiApp = () => {
  const navigation = useNavigation();
  const { scanForDevices, requestPermissions, devices, isScanning } = BluetoothManager();

  // Solicitar permisos al montar el componente
  useEffect(() => {
    const checkPermissions = async () => {
      const permissionsGranted = await requestPermissions();
      if (!permissionsGranted) {
        Alert.alert("Permisos necesarios", "Necesitamos permisos de Bluetooth para escanear dispositivos.");
      }
    };
    checkPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Spoti</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={scanForDevices} disabled={isScanning}>
          <Text style={styles.btnText}>
            {isScanning ? "Escaneando..." : "Conectar mi maceta"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button} 
          onPress={() => Linking.openURL("https://quieromasplantas.com/?s=cactus")}
        >
          <Text style={styles.btnText1}>¿Qué tipo de planta tengo?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>By: Juan, Dante, Mateo, Nahi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e2be",
    padding: 20,
  },
  header: {
    alignItems: "center",
    position: "relative",
    width: 400,
  },
  title: {
    fontSize: 100,
    fontFamily: "DancingScript-SemiBold",
    margin: 0,
    alignItems: "stretch",
  },
  main: {
    marginVertical: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  btnText: {
    fontSize: 24,
    fontFamily: "DancingScript-SemiBold",
    color: "#3CB371",
    textAlign: "center",
  },
  btnText1: {
    fontSize: 24,
    fontFamily: "Cursive",
    color: "#3CB371",
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
  },
});

export default SpotiApp;
