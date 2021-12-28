import React from 'react';
import { View } from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Icon from './components/icon';
import Text from './components/Text';
import useApearance from './hooks/useAppearance';

import { Container } from './styles';


const App: React.FC = () => {
 const {theme} = useApearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View 
          style={{
            flexDirection: 'row', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
         <Icon icon='morte' size={150} />
         <Icon icon='fantasma' size={150} />
        </View>
      </Container>
    </ThemeProvider>
  );
};
export default App;

