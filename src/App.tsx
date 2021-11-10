import React, { useState, useEffect } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Jhonny');
  const [title, setTitle] = useState<string>('Olá');

/**
 * Effect
 */
  useEffect(()=>{
    console.log("mounting");
    if(name == 'Jhonny'){
      setTitle('Hello');
    }else{
      setTitle('Olá');
    }
    
    return () => Alert.alert('OOPS', 'Component unmounted!')
  }, [name, title]);
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
