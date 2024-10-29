
import React from "react";
import Navegación from "./navegacion";
import * as Font from 'expo-font'


export default function SpotiApp (){

  const [fontsLoaded] = Font.useFonts({
    'DancingScript-SemiBold': require('./assets/fonts/DancingScript-SemiBold.ttf'), // Asegúrate de que la ruta sea correcta
  });

    return(
      <Navegación/>
      
    );
  }

