// src/screens/WelcomeScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from '../components/ButtonComponents';
import colors from '../theme/color';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Todo App</Text>
        <Text style={styles.subtitle}>
          Organize your tasks and boost your productivity
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/placeholder.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Tasks')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 20,
  },
});
