import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Props} from'./types'

const Header = (props: Props) => {
  return (
    <View>
      <Text style={style.Title}>{props.title}</Text>
      <Text style={style.SubTitle}>{props.name}</Text>
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
