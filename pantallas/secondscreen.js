import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
const SecondScreen = () => {
        return(
                <View style={styles.container}>
                    <View style={styles.header}>
                            <View>
                                <Text style = {styles.title}>Riegos</Text>
                            </View>
                        </View>
                        <View style={styles.main}>
                            {/* Columna de la izquierda */}
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText}>1</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText1}>2</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText1}>3</Text>
                                </TouchableOpacity>
                            </View>
            
                            {/* Columna de la derecha */}
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText}>4</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText1}>5</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.button} onPress={() => {}}>
                                    <Text style={styles.btnText1}>6</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            }
            
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    justifyContent: 'flex-start',
                    backgroundColor: '#e8e2be',
                    padding: 20,
                },
                header: {
                    marginTop: 20,
                },
                title: {
                    fontSize: 60,
                    fontFamily: 'sans-serif',
                },
                main: {
                    flexDirection: 'row', // Para tener las dos columnas una al lado de la otra
                    justifyContent: 'space-around', // Separar columnas a los lados
                    marginVertical: 30,
                },
                column: {
                    flexDirection: 'column', // Cada columna contiene los botones en vertical
                    alignItems: 'center',
                    marginRight: 100,
                    marginLeft: 100
                },
                button: {
                    backgroundColor: 'white',
                    borderRadius: 50,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginVertical: 30,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                },
                btnText: {
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: '#3CB371',
                    padding: 10,
                    borderRadius: 50,
                    textAlign: 'center',
                },
                btnText1: {
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: '#3CB371',
                    padding: 10,
                    borderRadius: 25,
                    textAlign: 'center',
                },
            });
            
export default SecondScreen;