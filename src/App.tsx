import React, { useState, useEffect, useCallback} from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Jhonny');
  const [title, setTitle] = useState<string>('Olá');

/**
 * Effect
 */
  useEffect(()=>{
    if(name == 'Jhonny'){
      setTitle('Hello');
    }else{
      setTitle('Olá');
    }
    
  }, [name, title]);


  /**
   * callback
   */
  const handlePressButton = useCallback (()=>{
    if (name == 'Jhonny') {
      setName('Espartano');
    }else{
      setName ('Jhonny');
    }
  },[name]);
  
  return (
    <SafeAreaView style={style.App} >
      <Header title={title} name={name} />
      <Button title="change name" onPress={handlePressButton}/>
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
