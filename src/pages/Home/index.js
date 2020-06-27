import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';

import styles from './styles';

import Logo from '../../assets/IBGE.png';

export default function Home() {
  const [name, setName] = useState('');
  const [nasc, setNasc] = useState('');
  const [data, setData] = useState('');

  async function handleName(name){
    const response = await api.get(`/${name}`);

    return setData(response.data[0].res.sort(function(a, b) {
      return b.frequencia - a.frequencia;
    }));
  };

  return (
    <View style={styles.Container}>

      <View style={styles.Header}>
        <Image source={Logo} style={{ height: 50, width: 50 }} />
        <Text style={styles.Title}>App do IBGE</Text>
      </View>

      <View>
        <Text style={styles.Title2}>Descubra informações sobre seu nome</Text>
        <TextInput 
          style={styles.Input}
          placeholder='Seu promeiro nome aqui' 
          value={name}
          onChangeText={(name) => {setName(name);}} 
          placeholderTextColor='#002663'/> 

        <TextInput
          type="number"
          style={styles.Input}
          placeholder='Seu ano de nascimento aqui' 
          value={nasc}
          onChangeText={(nasc) => {setNasc(nasc);}} 
          placeholderTextColor='#002663'/> 

        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleName(name)}>
            <Text style={styles.ButtonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      {data ? <Text style={styles.Title2}>Resultado para:  {name}</Text> : false }

      <FlatList
        data={data}
        style={styles.NameList}
        keyExtractor={item => item.periodo}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card periodo={item.periodo} frequencia={item.frequencia} />
        )}
      />

    </View>
  );
};