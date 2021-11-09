import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: React.FC = () => {
  return (
    <View>
      <Text style={style.Title}>Olá,</Text>
      <Text style={style.SubTitle}>Jhonny</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  Title: {
    color: 'black', //cor do titulo
    fontSize: 30, //tamanho do titulo
  },
  SubTitle: {
    color: 'black', //cor do titulo
    fontSize: 15, //tamanho do titulo
  },
});
