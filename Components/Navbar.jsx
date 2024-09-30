import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity >
        <Text style={styles.navText}>Menu</Text>
      </TouchableOpacity>

      <Text style={styles.navTitle}>Product List</Text>

      <TouchableOpacity >
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181716',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  navTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Navbar;
