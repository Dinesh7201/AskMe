import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,

} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import database from '@react-native-firebase/database';

export default function App({navigation}) {
  const [myData, setMyData] = useState(null);
  const [name,setName] = useState('dinesh');
  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await database().ref('askme').once('value');

      console.log(data);

      setMyData(data.val());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <View>
    //   <Text>Name:-{myData ? myData.name : 'Loading...'}</Text>
    //   <Text>Age:-{myData ? myData.age : 'Loading...'}</Text>
    // </View>
        <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{textAlign: 'right',alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate('edit')}>
        <Text
          style={styles.box}>
          <Icon name="account-edit" color="blue" size={40}/>
        </Text>
      </TouchableOpacity>
        </View>
        
        <View style={styles.all}>
        <Avatar.Image 
            
            size={80}
          />
          
        
        <View style={{marginLeft:20,marginTop:10}}>
        <Title style={[styles.title,{marginBottom:1}]}>{myData ? myData.value : 'Loading...'}</Title>
        <Caption style={styles.caption}>{myData ? myData.Userid : 'Loading...'}</Caption>
        </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          {/* <Text style={{color:"#777777", marginLeft: 20}}>{myData ? myData.UserRoll : 'Loading...'}</Text> */}
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          {/* <Text style={{color:"#777777", marginLeft: 20}}>{route.params.phone}</Text> */}
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{myData ? myData.UserGmail : 'Loading...'}</Text>
        </View>
      </View>
      <View style={[styles.userInfoSection,{flexDirection:'row'}]}>
      
          
      </View>
      <View>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="book-education-outline" color="#FF6347" size={25}/>
            {/* <Text style={styles.menuItemText}>Year                                                         {route.params.year}</Text> */}
            
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="ammunition" color="#FF6347" size={25}/>
            {/* <Text style={styles.menuItemText}>Branch                                               {route.params.Branch}</Text> */}
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            {/* <Text style={styles.menuItemText}>ID                                                {route.params.ID}</Text> */}
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-settings"  size={25}/>
            {/* <Text style={styles.menuItemText}>Settings</Text> */}
          </View>
        </TouchableRipple>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text
          style={styles.login}>
          Log Out 
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    all:{
      flexDirection:'row',marginTop:15
    },
      container:{ 
        flex: 1
    },
    userInfoSection:{
      marginTop:25,
      
      paddingHorizontal:30,
      marginBottom:25
    },
    title:{
      fontSize:24,
      fontWeight:'bold'
    },
    caption:{
      fontSize:14,
      lineHeight:14,
      fontWeight:'500'
    },
    row:{
      flexDirection:'row',
      marginBottom:10,
    },
    infoBoxWrapper:{
      borderBottomColor:'#ddddddddd',
      borderRadius:1,
      borderTopColor:'#dddddddd',
      borderTopWidth:1,
      flexDirection:'row',
      height:100,
    },
    infoBox:{
      width:'50%',
      alignItems:'center',
      justifyContent:'center',
    
    },
    menuItem:{
      flexDirection:'row',
      paddingVertical:15,
      paddingHorizontal:30,
  
    },
    menuItemText:{
      color:'#77777777',
      marginLeft:20,
      fontWeight:'600',
      fontSize:16,
      lineHeight :26
    },
    login: {
      fontSize :20,
      color:'blue',
      fontWeight : 'bold',
      fontStyle:'Tahoma',
      textAlign:'center',
      color:'blue',
      borderRadius: 15,
      paddingVertical: 12,
      paddingHorizontal: 32,
    
      
  }
  }
  )