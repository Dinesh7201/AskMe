import React from 'react';
import { View, Text, StyleSheet,Image, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import logo from "../assets/images/logo.png";

const Details = ({ navigation }) => {
    // const [name,setName] = useState('dinesh')
    const {height} = useWindowDimensions();
    return (
        <View >
           <TouchableOpacity onPress={() => navigation.navigate('Ask Me')}>
                <Image source={logo} 
                style={[styles.logo,{height:height*0.3}]} resizeMode='contain'/>
            </TouchableOpacity>
            
           
                
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text
          style={styles.signup}>
                Create New Account
        </Text>
      </TouchableOpacity>
      <Text>  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text
          style={styles.login}>
          Log In 
        </Text>
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
        width:'100%',
        maxheight:400,
        maxWidth:500,
        top:100
      },
      signup:{
        textAlign:'center',
        top:180,
        alignContent:'center',
        alignContent:'center',
        //left:110,
        // alignItems:'center',
        // alignContent:'center',
        fontSize :20,
        // color:'blue',
        // fontWeight : 'bold',
        // fontStyle:'Tahoma',
        backgroundColor:'blue',
        color:'white',
        borderRadius: 20,
        paddingVertical:10 ,
         paddingHorizontal: 0,
        
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
            top:170,
            
    }
  }
  )
export default Details;
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