// import React, { useState, useEffect } from 'react';

// import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// const App = () => {
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     setCurrentDate(
//       date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
//     );
//   }, []);

//   return (
//     <SafeAreaView style={{ flex: 1, }}>
//       <View>
//         <View style={{flexDirection: 'row', }}>
//         <Icon name="account-group-outline" color="blue" size={40}/>
//         <Text style={{fontSize:40,fontStyle:'bold'}}>Community         </Text>
       
        
        
//         </View>
//         <View style={styles.whole}>
//           <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={styles.textStyle}>din                                                  </Text>
//             <Text style={styles.textStyle}>{currentDate}</Text>
//           </View>
//         </View>
//         <View style={styles.info}>
          
//         <View>
//           <Text >jhbsdjbhdshjdsbhjdshbjdsbhjdshbjdnjnjnjnjnnjjnnjnjnjnjnjnjnjnjnjnjnjjjnjnjnjnjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnshbdbhjsdhbj</Text>


// <View style={styles.fixToText}>
//         <Text></Text>
//         <Button
//           title="Answer"
//         />
//       </View>
//         </View>
//         </View>

//         <Text></Text>
//         <Text></Text>
//       </View>
//       <View>
//         <View style={styles.whole}>
//           <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={styles.textStyle}>din                                                  </Text>
//             <Text style={styles.textStyle}>{currentDate}</Text>
//           </View>
//         </View>
//         <View style={styles.info}>
          
//         <View>
//           <Text >jhbsdjbhdshjdsbhjdshbjdsbhjdshbjdnjnjnjnjnnjjnnjnjnjnjnjnjnjnjnjnjnjjjnjnjnjnjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnshbdbhjsdhbjhvhghvgvhhgvhgvhhgvhghgvhgvhvggvggvhgvhvghvghvghvggvgvgvgvgvhvgh</Text>


// <View style={styles.fixToText}>
//         <Text></Text>
//         <Button
//           title="Answer"
//         />
//       </View>
//         </View>
//         </View>

//         <Text></Text>
//         <Text></Text>
//       </View><View>
//         <View style={styles.whole}>
//           <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={styles.textStyle}>din                                                  </Text>
//             <Text style={styles.textStyle}>{currentDate}</Text>
//           </View>
//         </View>
//         <View style={styles.info}>
          
//         <View>
//           <Text >jhbsdjbhdshjdsbhjdshbjdsbhjdshbjdnjnjnjnjnnjjnnjnjnjnjnjnjnjnjnjnjnjjjnjnjnjnjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnshbdbhjsdhbj</Text>


// <View style={styles.fixToText}>
//         <Text></Text>
//         <Button
//           title="Answer"
//         />
//       </View>
//         </View>
//         </View>

//         <Text></Text>
//         <Text></Text>
//       </View><View>
//         <View style={styles.whole}>
//           <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={styles.textStyle}>din                                                  </Text>
//             <Text style={styles.textStyle}>{currentDate}</Text>
//           </View>
//         </View>
//         <View style={styles.info}>
          
//         <View>
//           <Text >jhbsdjbhdshjdsbhjdshbjdsbhjdshbjdnjnjnjnjnnjjnnjnjnjnjnjnjnjnjnjnjnjjjnjnjnjnjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnshbdbhjsdhbj</Text>


// <View style={styles.fixToText}>
//         <Text></Text>
//         <Button
//           title="Answer"
//         />
//       </View>
//         </View>
//         </View>

//         <Text></Text>
//         <Text></Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 18,
//     backgroundColor: 'blue',
//     color: 'white',
//   },
//   whole: {
//     borderWidth: 4,
//     borderBottomColor: 'blue',
//     flexDirection: 'row',
//   justifyContent: 'space-between',
//   },
//   info: {
//     borderWidth: 4,
//     flexDirection: 'row',
//   justifyContent: 'space-between',

//   },
//   ans:{
//     textAlign:'right',
//   justifyContent: 'flex-end',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
// },
// fixToText: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
// },
// });

// export default App;

import React, { useState, useEffect, useContext } from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
const image={uri:"https://designimages.appypie.com/appbackground/appbackground-61-homedecor-linen.jpg"};
const Comm = ({navigation,Email}) => {
  const clickhandler=()=>{
    alert('Floating button clicked!')
  }
  // const email=Email;
   const [list,setList]=useState(null);
   useEffect(()=>{getDataBase()},[])
   const getDataBase=async()=>{
    try{
      const data=await database().ref("queries").on("value",(tempData)=>{
        setList(tempData.val());
      })
    }
    catch(e){
      console.log(e);
    }
   };
     return(
      <View>
        <ImageBackground
        source={image}
        />
      <ScrollView>
      <View >
      <View style={{flexDirection:'row'}}>
      
        <Text style={{color:"black",fontSize:45,textAlign:"center",fontFamily:"bold"}}>COMMUNITY</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Ask',{length:list.length})}
        >
        <Text style={styles.logintext2}>Ask</Text>
      </TouchableOpacity>
      </View>
      <View>
      <ScrollView>
          <FlatList data={list} renderItem={(item)=>{
           console.log(item);
           if(item.item!=null){
            return(
             
                                
              <View style={{ height: 80, borderRadius: 10, backgroundColor: "lightblue", marginVertical: 10, marginHorizontal: 7 }}>
              <View style={{ height: 30, borderRadius: 8, backgroundColor: "black", flexDirection: "row" }}>
                  <Text style={{ left: 10, color: "white", top: 5 }}>{item.item.name}</Text>
                  <Text style={{ left: 190, color: "white", top: 5 }}>{item.item.curretTime}</Text>
              </View>
              
              <View style>
                  <Text style={{ left: 10, color: "black" }}>{item.item.message}</Text>
              </View>
              <TouchableOpacity>
                  <View style={{ backgroundColor: "green", marginHorizontal: 130, borderRadius: 150, left: 100, top: 7 ,}}>
                      <Text style={{ textAlign: "center", color: "white" }}>Answer</Text>
                  </View>
              </TouchableOpacity>
          </View>
            );
           }
          }}
          />
         </ScrollView>
        <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Ask',{length:list.length})}
        >
        <Image
        style={styles.floatingbutton}
        source={{uri:'https://raw.githubusercontent.com/tranhonghan/images/main/plus_icon.png'}}
        />
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      </View>
    );
}
export default Comm;
    const styles = StyleSheet.create({
        heading: {
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 30,
          marginTop:5,
          color:"white",
          backgroundColor:"black",
          borderbottom:2,
        },
        card: {
          backgroundColor: 'white',
         
          borderRadius: 8,
          paddingVertical: 5,
          // paddingHorizontal: 25,
         
          // width: '100%',
          marginVertical: 10,
          marginRight:20,
          marginLeft:20,
       
        },
        textStyle: {
          textAlign: 'right',
          fontSize: 20,
          color: 'green',
        },
        shadowProp: {
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        logintext:{
          // marginVertical:100,
          textAlign:'center',
          padding:10,
          fontSize:20,
          color:'white',
          backgroundColor:'red',
          borderRadius: 15,
          marginLeft:200,
        },
        logintext1:{
          // marginVertical:100,
          textAlign:'center',
          padding:10,
          fontSize:20,
          color:'white',
          backgroundColor:'green',
          borderRadius: 15,
          marginLeft:200,
        },
        logintext2:{
           textAlign:'center',
           padding:15,
           fontSize:20,
           color:'white',
           backgroundColor:'blue',
           borderRadius: 5,
           marginRight:2,
           marginTop:5,
           marginLeft:70,     
        },
        ask:{
           textAlign:'center',
           color:'blue',
        },
        
        touchableOpacity:{
             position:'absolute',
             width:40,
             height:80,
             alignContent:'center',
             justifyContent:'center',
             right:30,
             bottom:166,
            // backgroundColor:'red',
        },
        floatingbutton:{
          resizeMode:'contain',
          width:50,
          height:50,
        }
});