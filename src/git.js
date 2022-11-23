import React,{useEffect,useState} from "react";
import axios from "axios";
import { Text,View,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image,SafeAreaView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/images/logo.png';
class Notification extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    this.getapiData()
  }
  async getapiData(){
    let resp=await axios.get('https://api.github.com/orgs/scorelab/repos?sort=pushed&per_page=10')
    //console.warn(resp.data);
    this.setState({data:resp.data})
  }
  render(){
    const{data}=this.state;
    return(
      <SafeAreaView style={styles.SafeAreaStyle}>
        <View style={{backgroundColor:"black",}}>
        <Text> </Text>
         <Text> </Text>
        <View style={{alignItems:"center",backgroundColor:'blue' ,borderRadius:50,marginLeft:50,marginRight:50}}> 
      <Text style={{fontSize:30,color:'white'}}> Github</Text>
      </View>
      <Text></Text>
          <View style={styles.ViewStyle} />
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    {/* onPress={() => Linking.openURL(item.html_url)}> */}
                    <View style={styles.ViewStyle1}>
                      <View style={styles.ViewStyle5}>
                        <Text style={styles.TextStyle}>{item.name}</Text>
                        <View style={styles.DividerView} />
                        <Text style={styles.TextStyle1}>
                          {item.language}
                        </Text>
                       <Text >{item.description}</Text>
                      </View>
                      <View style={styles.ViewStyle2}>
                        <View style={styles.ViewStyle3}>
                          <Image
                            source={{uri: item.owner.avatar_url}}
                            style={styles.ImageStyle}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => "key" + index}
            ListFooterComponent={<View style={{height: 50}} />}
          />
        </View>
      </SafeAreaView>
    )
  }
}
export default Notification;
let deviceWidth = Dimensions.get("window").width;
      let deviceHeight = Dimensions.get("window").height;
      
      const styles=StyleSheet.create({
          container:{
      flexDirection:'row',
      justifyContent:'center',
     // backgroundColor:'green',
      padding:15,
          },
          ViewStyle1: {
            width: "90%",
            alignSelf: "center",
            backgroundColor: "white",
            marginBottom: 20,
            borderRadius: 7,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row",
          },
          ViewStyle: {marginBottom: 15},
      
          ViewStyle1: {
            width: "90%",
            alignSelf: "center",
            backgroundColor: "white",
            marginBottom: 20,
            borderRadius: 7,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row",
          },
        
          TextStyle: {
            fontSize: 17,
            fontWeight: Platform.OS === "ios" ? "400" : "normal",
            marginVertical: 5,
          },
        
          TextStyle1: {fontSize: 11, fontWeight: "normal"},
        
          ViewStyle2: {alignSelf: "flex-end", flex: 2.6},
        
          ViewStyle3: {flexDirection: "row"},
        
          DividerView: {
            borderBottomColor: "#d4d4d4",
            borderBottomWidth: 1,
            marginBottom: 3,
            marginHorizontal: 10,
            marginVertical: 3,
          },
        
          ViewStyle4: {
            borderBottomColor: "black",
            borderRightWidth: 2,
          },
        
          ImageStyle: {
            width: deviceWidth * 0.235,
            height: deviceHeight * 0.144,
            alignSelf: "flex-end",
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
          },
        
          ViewStyle5: {flex: 7.4, padding: 5, marginLeft: 5},
          
      })