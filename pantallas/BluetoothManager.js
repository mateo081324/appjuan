import { useState, useEffect, useMemo } from "react";
import { Platform, PermissionsAndroid, Alert } from "react-native";
import { BleManager } from "react-native-ble-plx";
import * as ExpoDevice from "expo-device";

const BluetoothManager = () => {
  const bleManager = useMemo(() => new BleManager(), []);
  const [devices, setDevices] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  // Solicitar permisos en Android
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if (ExpoDevice.platformApiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permiso de Ubicación",
            message: "Esta aplicación necesita acceso a la ubicación para usar Bluetooth",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const bluetoothScanPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          {
            title: "Permiso de Escaneo",
            message: "Esta aplicación necesita escanear dispositivos Bluetooth cercanos",
            buttonPositive: "OK",
          }
        );

        const bluetoothConnectPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          {
            title: "Permiso de Conexión",
            message: "Esta aplicación necesita conectar dispositivos Bluetooth",
            buttonPositive: "OK",
          }
        );

        const fineLocationPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permiso de Ubicación",
            message: "Esta aplicación necesita acceso a la ubicación para usar Bluetooth",
            buttonPositive: "OK",
          }
        );

        return (
          bluetoothScanPermission === PermissionsAndroid.RESULTS.GRANTED &&
          bluetoothConnectPermission === PermissionsAndroid.RESULTS.GRANTED &&
          fineLocationPermission === PermissionsAndroid.RESULTS.GRANTED
        );
      }
    }
    return true; // iOS no necesita permisos explícitos
  };

  // Función para escanear dispositivos
  const scanForDevices = async () => {
    const permissionsGranted = await requestPermissions();
    if (!permissionsGranted) {
      Alert.alert("Permisos Denegados", "Necesitamos permisos de Bluetooth para escanear dispositivos.");
      return;
    }

    setIsScanning(true);
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log("Error en escaneo:", error);
        setIsScanning(false);
        return;
      }

      if (device && device.name) {
        setDevices((prevDevices) => {
          if (!prevDevices.some((d) => d.id === device.id)) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      }
    });

    // Detener escaneo después de 10 segundos
    setTimeout(() => {
      bleManager.stopDeviceScan();
      setIsScanning(false);
    }, 10000);
  };

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      bleManager.destroy();
    };
  }, []);

  return {
    scanForDevices,
    requestPermissions,
    devices,
    isScanning,
  };
};

export default BluetoothManager;
