import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/Firebase';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const [name, setName] = useState('Joe');
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}</Text>
      <Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
