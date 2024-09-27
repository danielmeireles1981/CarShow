import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Cadastrar" onPress={() => navigation.navigate('Register')} />
      <Button title="Lista de Cadastros" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
  },
});

export default HomeScreen;
