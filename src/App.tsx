import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import useApearance from './hooks/useAppearance';

import { Container } from './styles';


const App: React.FC = () => {
 const {theme} = useApearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
       <Header/>
       <Button onPress = {() => {}} />
      </Container>
    </ThemeProvider>
  );
};
export default App;

