import React, {Component} from "react";
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import Medium from '../homess/medium';
import Git from '../git';
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet, Dimensions} from "react-native";
class NotificationScreen extends Component {
  state = {showingup: true};
  renderContent() {
    switch (this.state.showingup) {
      case true:
        return (
          <View style={{flex: 1}}>
            <Git />
          </View>
        );
      case false:
        return (
          <View>
            <Medium />
          </View>
        );
      default:
        return <Text>Error</Text>;
    }
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.SafeAreaStyle} />
        <View style={styles.ViewStyle}>
          <View style={styles.WholeTabBar}>
            {this.state.showingup ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle1}
                    size={26}
                    name={"logo-github"}
                  />
                  <Text style={styles.TextStyle}>Github</Text>
                </View>
                <View style={styles.DividerView} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle}
                    size={26}
                    name={"logo-github"}
                  />
                  <Text style={styles.TextStyle}>Github</Text>
                </View>
                <View style={styles.DividerView1} />
              </TouchableOpacity>
            )}
            {this.state.showingup === false ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle1}
                    size={26}
                    name={"newspaper-outline"}
                  />
                  <Text style={styles.TextStyle}>Medium</Text>
                </View>
                <View style={styles.DividerView} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle}
                    size={26}
                    name={"newspaper-outline"}
                  />
                  <Text style={styles.TextStyle}>Medium</Text>
                </View>
                <View style={styles.DividerView1} />
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 1}}>{this.renderContent()}</View>
        </View>
      </>
    );
  }
}

export default NotificationScreen;

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export const COLOR_PRIMARY = "#51AD28";
export const COLOR_GRAY_PRIMARY = "#dbdbdb";
export const COLOR_GRAY_SECONDARY = "#d4d4d4";
export const COLOR_LIGHT_PRIMARY = "#9cd683";
export const COLOR_LIGHT_SECONDARY = "#79AEE0";
const styles=StyleSheet.create({
  WholeTabBar: {
    width: "100%",
    height: 60,
    backgroundColor: COLOR_PRIMARY,
    alignSelf: "center",
    borderRadius: 3,
    flexDirection: "row",
    paddingVertical: 5,
  },

  LoginTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 20,
  },

  SignupTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 3,
  },

  BarStyle: {
    textAlign: "center",
    marginTop: 8,
    color: COLOR_PRIMARY,
    fontSize: 20,
    fontWeight: "800",
  },

  BarStyle1: {
    textAlign: "center",
    marginTop: 8,
    color: COLOR_PRIMARY,
    fontSize: 20,
    fontWeight: "800",
  },

  ViewStyle: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
  },

  DividerView: {
    borderBottomColor: "#23598B",
    borderBottomWidth: 7,
    marginVertical: 3,
    marginHorizontal: 0,
  },

  DividerView1: {
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 2,
    marginVertical: 3,
    marginHorizontal: 0,
  },

  SafeAreaStyle: {flex: 0, backgroundColor: COLOR_PRIMARY},

  IconStyle: {color: COLOR_GRAY_PRIMARY, alignSelf: "center"},

  IconStyle1: {color: "white", alignSelf: "center"},

  TextStyle: {alignSelf: "center", color: "white"},
});