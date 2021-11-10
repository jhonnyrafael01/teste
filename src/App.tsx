import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Jhonny');
  const [title] = useState<string>('Olá');


  /**
   * callback
   */
  const handlePressButton = () => {
    setName(old => {
      if (old == 'Jhonny') {
        return 'Espartano';
      } else {
        return 'Jhonny';
      }
    });
  };


  return (
    <SafeAreaView style={style.App} >
      <Header title={title} name={name} />
      <Button title="change name" onPress={handlePressButton} />
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },
});
