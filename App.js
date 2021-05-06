import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Test App</Text>
      {/*<View style={styles.numberButton}>
        <Button
          onPress={onPressLearnMore}
          title="1"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>*/}
      {/* Trevor Test */}
      <StatusBar style="auto" />
  </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButton: {
    backgroundColor: '#fff'
  }
});
