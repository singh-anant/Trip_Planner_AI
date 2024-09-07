import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../utility/Colors';

const LandingScreen = ({navigation}) => {
  {
    return (
      <View>
        <Image
          source={require('../../assets/images/Login.webp')}
          style={{height: 500, width: '100%', resizeMode: 'cover'}}
        />
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'SUSE-VariableFont_wght',
              textAlign: 'center',
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            TRIP PLANNER AI
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'outfit',
              textAlign: 'center',
              color: Colors.darkGray,
              marginTop: 10,
            }}>
            Embark on an epic journey where dreams and destiny intertwine.
            Unveil hidden realms, forge unforgettable connectionss
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  button: {
    backgroundColor: Colors.black, // Primary color for the button
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white, // Text color
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LandingScreen;
