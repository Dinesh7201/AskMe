import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({ navigation }) => {
  return (
    <View style={styles.whole}>
      <View style={{}}>

        </View>
      <TouchableOpacity onPress={() => navigation.navigate('commu')}>
        <Text
          style={styles.box}>
          <Icon name="home" color="blue" size={40}/>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Text
          style={styles.box}>
          <Icon name="inbox" color="blue" size={40}/>
        </Text>
      </TouchableOpacity>
      <Text>  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('forums')}>
        <Text
          style={styles.box}>
          <Icon name="message" color="blue" size={40}/>
        </Text>
      </TouchableOpacity>
      <Text>  </Text>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Text>
          
          <Icon name="alarm-bell" color="blue" size={40}/>
        </Text>
      </TouchableOpacity> */}
              
      <Text>  </Text>

      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Text
          style={styles.box}>
          <Icon name="face-man-profile" color="blue" size={40}/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  whole:{ flex: 1, 

    justifyContent: 'center', 
    alignItems: 'center' ,
    top:300,
    flexDirection:'row',
  },
  box:{
    
            
  },
  
});
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
