import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { UserSingleton } from "../../singleton";
import { Divider } from "react-native-elements";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);
    console.log(user.email);

    fetch('http://127.0.0.1:5000/getFavRestaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: user.uid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Success) {
          setRestaurants(data.Message);
        } else {
          console.error('There was a problem with the API request:', data.Message);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the API request:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.usernameText}>Username: {name}</Text>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */}}>
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>
      {!isSubmitted && (
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bio"
            value={bio}
            onChangeText={setBio}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}

      {isSubmitted && (
        <View style={styles.submittedData}>
          <Text style={styles.submittedLabel}></Text>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Bio: {bio}</Text>
          <Text>Avatar: {avatar}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  form: {
    width: '80%',
    marginTop: 60,
    marginBottom: 50,
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 141,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
  usernameText:{
    fontSize: 28,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'flex-start',
  }
});

export default Profile;
