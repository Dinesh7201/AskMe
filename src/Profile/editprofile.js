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
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

export default function App({navigation}) {
  const [inputTextValue, setInputTextValue] = useState(null);
  const [list, setList] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [Userid, setUserid] = useState('');
  const [UserRoll, setUserRoll] = useState('');
  const [UserGmail, setUserGmail] = useState('');
    const [Year, setYear] = useState('');

    const [Branch, setBranch] = useState('');

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await database()
        .ref('askme')
        .on('value', tempData => {
          console.log(data);

          setList(tempData.val());
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const index = list.length;
        const response = await database().ref('askme').set({
          value: inputTextValue,

          Userid: Userid,
          UserRoll: UserRoll,
          UserGmail: UserGmail,
          Year:Year,
          Branch:Branch
        });

        console.log(response);
        navigation.navigate('MainNavigator');
        setInputTextValue('');
      } else {

        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const response = await database()
          .ref(`todo/${selectedCardIndex}`)
          .update({
            value: inputTextValue,

            Userid: Userid,
            UserRoll: UserRoll,
            UserGmail: UserGmail,
            Year:Year
          });

        console.log(response);
        setInputTextValue('');
        setIsUpdateData(false);
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardPress = (cardIndex, cardValue) => {
    try {
      setIsUpdateData(true);
      setSelectedCardIndex(cardIndex);
      setInputTextValue(cardValue);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardLongPress = (cardIndex, cardValue) => {
    try {
      Alert.alert('Alert', `Are You Sure To Delete ${cardValue} ?`, [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Is Press');
          },
        },
        {
          text: 'Ok',
          onPress: async () => {
            try {
              const response = await database()
                .ref(`todo/${cardIndex}`)
                .remove();

              setInputTextValue('');
              setIsUpdateData(false);
              console.log(response);
            } catch (err) {
              console.log(err);
            }
          },
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 60, fontWeight: 'bold'}}>
          Edit
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter User Name"
          value={inputTextValue}
          onChangeText={value => setInputTextValue(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Enter User id"
          Userid={Userid}
          onChangeText={Userid => setUserid(Userid)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter ID"
          UserRoll={UserRoll}
          onChangeText={UserRoll => setUserRoll(UserRoll)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter User Gmail"
          UserGmail={UserGmail}
          onChangeText={UserGmail => setUserGmail(UserGmail)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter User Year"
          Year={Year}
          onChangeText={Year => setYear(Year)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter User Branch"
          Branch={Branch}
          onChangeText={Branch => setBranch(Branch)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddData()}>
          <Text style={{color: '#fff'}}>Add</Text>
        </TouchableOpacity>
        <Text />
        
        <Text />
        
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={list}
          renderItem={item => {
            const cardIndex = item.index;
            if (item.item !== null) {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleCardPress(cardIndex, item.item.value)}
                  onLongPress={() =>
                    handleCardLongPress(cardIndex, item.item.value)
                  }>
                    {/* value: inputTextValue,
            username: Username,
            Userid: Userid,
            UserRoll: UserRoll,
            UserGmail: UserGmail, */}
                  <Text>username : {item.item.value}</Text>
                  <Text>userid {item.item.username}</Text>
                  <Text>UserRoll: {item.item.UserRoll}</Text>
                  <Text>UserGmail: {item.item.UserGmail}</Text>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
});

// // import React, {useState} from 'react';
// // import {
// //   StyleSheet,
// //   View,
// //   Text,
// //   TextInput,
// //   Button
// // } from 'react-native';

// // const FirstPage = ({navigation}) => {
// //   const [Username,setUserName] = useState('');
// //   const [Userid,setUserid] = useState('');
// //   const [UserRoll,setUserRoll] = useState('');
// //   const [UserGmail,setUserGmail] = useState('');
// //   return (
// //       <View style={{alignContent:'center'}}>
// //         <Text style={{fontSize:100}}>   profile</Text>

// //          <View style={{flexDirection:'row'}}><Text style={{marginVertical:20}}>Enter name:</Text>

// //           <TextInput
// //           value={Username}
// //           onChangeText={(Username) => setUserName(Username)}
// //          placeholder={'Name'}/>
// //         </View>
// //         <View style={{flexDirection:'row'}}><Text style={{marginVertical:20}}>Enter id:</Text>
// //           <TextInput
// //           value={Userid}
// //           onChangeText={(Userid) => setUserid(Userid)}
// //          placeholder={'id'}/>
// //         </View>

// //         <View style={{flexDirection:'row'}}><Text style={{marginVertical:20}}>Enter Roll:</Text>
// //           <TextInput
// //           value={UserRoll}
// //           onChangeText={(UserRoll) => setUserRoll(UserRoll)}
// //          placeholder={'Roll'}/>

// //         </View>
// //         <View style={{flexDirection:'row'}}><Text style={{marginVertical:20}}>Enter Gmail:</Text>
// //           <TextInput
// //           value={UserGmail}
// //           onChangeText={(UserGmail) => setUserGmail(UserGmail)}
// //          placeholder={'Gmail'}/>

// //         </View>
// //         <Button
// //   title="Delete"
// // />
// // <Text></Text>
// // <Button
// //   title="Update"

// // />
// // <Text></Text>
// // <Button
// //   title="Edit"

// // />
// // <Text></Text>
// // <Button
// //   title="Delete"
// //   color=""

// // />

// //       </View>
// //   );
// // };

// // export default FirstPage;
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