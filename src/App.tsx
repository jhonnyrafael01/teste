import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  return <SafeAreaView style={style.App} >
    <Header name ="Jhonny" title="welcome to RN!" />
    <Header name ="Rafael" title="Olá," />

  </SafeAreaView>
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },
});
