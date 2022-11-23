import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  //
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      setMessage('');
      console.log(isUserLogin);

      navigation.navigate('MainNavigator', {
        email: isUserLogin.user.email,
        uid: isUserLogin.user.uid,
      });
    } catch (err) {
      console.log(err);

      setMessage(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Login
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleLogin()}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>

        <Text>{message}</Text>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => {
            navigation.navigate('SignupScreen');
          }}>
          <Text style={{color: 'blue'}}>New User Signup ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  signup: {
    alignItems: 'center',
  },
});
// // import {View, Text, TextInput, Button} from 'react-native';
// // import React, {useState} from 'react';
// // import auth from '@react-native-firebase/auth';

// // export default function MobileVerifyScreen() {
// //   const [mobileNo, setMobileNo] = useState('');
// //   const [otpInput, setOtpInput] = useState('');
// //   const [confirmData, setConfirmData] = useState('');

// //   const sendOtp = async () => {
// //     try {
// //       const mobile = '+91' + mobileNo;
// //       const response = await auth().signInWithPhoneNumber(mobile);
// //       setConfirmData(response);
// //       console.log(response);
// //       alert('Otp Is Sent Please Verify It...');
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const submitOtp = async () => {
// //     try {
// //       const response = await confirmData.confirm(otpInput);
// //       console.log(response);

// //       alert('Your number is verified');
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //       <TextInput
// //         style={{borderWidth: 1, width: '80%', marginBottom: 5}}
// //         placeholder="Enter Your Mobile Number"
// //         onChangeText={value => setMobileNo(value)}
// //       />
// //       <Button title="Send Otp" onPress={() => sendOtp()} />
// //       <TextInput
// //         style={{borderWidth: 1, width: '80%', marginBottom: 5, marginTop: 30}}
// //         placeholder="Enter Your OTP"
// //         onChangeText={value => setOtpInput(value)}
// //       />
// //       <Button title="Submit" onPress={() => submitOtp()} />
// //     </View>
// //   );
// // }
// import React from 'react';
// import { Text, View } from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         Try editing me! 🎉
//       </Text>
//     </View>
//   );
// }

// export default YourApp;