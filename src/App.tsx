/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.App}>
      <Text style={style.Title}>Welcome to sthima academy</Text>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black', //cor de fundo da tela
    justifyContent: 'center', //texto fica ao centro
  },
  Title: {
    color: 'white', //cor do titulo
    fontSize: 30, //tamanho do titulo
  },
});
