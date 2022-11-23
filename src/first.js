import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image, useWindowDimensions } from 'react-native';
import logo from '../assets/images/logo.png';

const Details = ({ navigation }) => {
    // const [name,setName] = useState('dinesh')
    const {height} = useWindowDimensions();
    return (
        <View style={styles.login}>
           
            <TouchableOpacity onPress={() => navigation.navigate('Login_SignUp')}>
                <Image source={logo} 
                style={[styles.logo,{height:height*0.3}]} resizeMode='contain'/>
            </TouchableOpacity>
            
        </View>
        
    )
};
const styles = StyleSheet.create(
    {
        login: {
            paddingVertical: 12,
            paddingHorizontal: 32,
            //left:50,
            //top:'800%'
            
          },
      logo:{
        top:'100%',
        alignContent:'center',
        alignItems:'center',
        width:330,
        height:100,
        bottom:100
      }
    }
  )
export default Details;
