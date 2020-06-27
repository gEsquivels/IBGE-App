import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Card({ periodo, frequencia, count }){

  var re = new RegExp(/^[^[]/);
  periodo = periodo.replace(/\[$/,"]");
  re.test(periodo) ? periodo = '[' + periodo : periodo

  return(
    <View style={styles.Container}>
      <Text style={styles.NameValue}>Periodo: <Text style={styles.Value}>{periodo}</Text>  
      </Text>
      <Text style={styles.NameValue}>Quantidade de Nomes: <Text style={styles.Value}>{frequencia}</Text></Text>
    </View>
  );
}
