import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import useApearance from './hooks/useAppearance';

// import { Container } from './styles';


const App: React.FC = () => {
 const {theme} = useApearance();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={style.App}>
       <Header/>
       <Button onPress = {() => {}} />
      </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black', //cor de fundo da tela
  },
  Title: {
    color: 'white', //cor do titulo
    fontSize: 30, //tamanho do titulo
  },
});
