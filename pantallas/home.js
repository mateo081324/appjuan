import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SpotiApp = () => {
    const navegacion =  useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Spoti</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={() => { openBluetoothSettings }}>
          <Text style={styles.btnText}>conectar mi maceta</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={styles.button} 
        onPress={() => {navegacion.navigate ("Stack")}}>
          <Text style={styles.btnText1}>¿Que tipo de planta tengo?</Text>

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e2be',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    position: 'relative',
    width: 400,
  },
  title: {
    fontSize: 100,
    fontFamily: 'DancingScript-SemiBold', // cambiar a tipografia q funcione
    margin: 0,
    alignItems: 'stretch'
  },
  floral: {
    width: 50,
    position: 'absolute',
    top: 10,
  },
  floralLeft: {
    left: 20,
  },
  floralRight: {
    right: 20,
  },
  main: {
    marginVertical: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  btnText: {
    fontSize: 24,
    fontFamily: 'DancingScript-SemiBold.ttf',// cambiar a tipografia q funcione
    color: 'white',
    backgroundColor: '#3CB371',
    padding: 10,
    borderRadius: 25,
    textAlign: 'center',
  },
  
  btnText1: {
    fontSize: 24,
    fontFamily: 'Cursive', // cambiar a tipografia q funcione
    color: 'white',
    backgroundColor: '#3CB371',
    padding: 10,
    borderRadius: 25,
    textAlign: 'center',
  },
  
  btnHover: {
    backgroundColor: '#2e8b57',
  },
  description: {
    fontSize: 16,
    color: '#3CB371',
    fontFamily: 'Arial',
    marginVertical: 5,
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default SpotiApp;