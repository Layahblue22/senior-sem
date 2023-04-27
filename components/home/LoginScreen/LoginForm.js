import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacityBase,
} from "react-native";
import { db, auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { UserSingleton } from "../../../singleton";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc, getDoc } from "@firebase/firestore";

async function getInfo(userCredentials) {
  const docRef = doc(db, "Profiles", userCredentials.user.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data;
}
const LoginForm = () => {
  var navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        //add document into collection
        setDoc(doc(db, "Profiles", userCredentials.user.uid), {
          uid: userCredentials.user.uid,
          email: userCredentials.user.email,
        });

        //TODO: Have a modal pop up to input the rest of the information, using that add it to the info saved in the db, and add all that to a object and store it in singleton
        //Notes for logging out
        //Call the signOut funtion ... signOut(auth).then(() => { UserSingleton.deleteUserObject(); navigation.navigate("Login Screen")}).catch((error) => { console.log("message: ",error)});


        UserSingleton.getUserObject(userCredentials.user);
        navigation.navigate("Asian");
      })
      .catch((error) => {
        console.log("Message:", error.message);
      });
  };
  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        let user = getInfo(userCredentials);
        //get the info from the db and save it to singleton

        // Append the information from getting the profile to userCredentials.user and save it to singleton
        //this gets the user info after it is set
        UserSingleton.getUserObject(user);

        //do db call to get user profile info
        navigation.navigate("Asian");
      })
      .catch((error) => {
        console.log("Message:", error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          styles={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          styles={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleLogIn();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSignUp();
          }}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    //flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#291B25",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#F48400",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#291B25",
    fontWeight: "700",
    fontSize: 16,
  },
});
