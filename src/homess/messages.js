import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Details = () => {
  return (
    <View >
      <View style={{flexDirection: 'row',top:10 }}>
      <Icon name="account-group-outline" color="blue" size={45}/>
      <Text style={{fontSize:35,fontWeight:'bold',textAlign:'center'}}>        Forums</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    1</Text>
      </View>
      
        </View>
        <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    5</Text>
      </View>
      
        </View>
        <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    Ask-SCoRe</Text>
      </View>
      
        </View>
        <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    GSoC</Text>
      </View>
      
        </View>
        <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    Go-Social</Text>
      </View>
      
        </View>
        <View style={styles.whole}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="account-group-outline" color="blue" size={30}/>
      <Text style={{fontSize:20,fontWeight:'bold'}}>    New room</Text>
      </View>
      
        </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    backgroundColor: 'blue',
    color: 'white',
  },
  whole: {
    borderWidth: 4,
    borderBottomColor: 'blue',
    flexDirection: 'row',
  justifyContent: 'space-between',
  padding:10
  },
  info: {
    borderWidth: 4,
    flexDirection: 'row',
  justifyContent: 'space-between',

  },
  ans:{
    textAlign:'right',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
});

export default Details;
