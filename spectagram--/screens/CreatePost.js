import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Platform, StatusBar, ScrollView, TextInput} from 'react-native'
import {AppLoading} from 'expo-app-loading'
import DropDownPicker from 'react-native-dropdown-picker'
import {RFValue} from 'react-native-responsive-fontsize'

export default class CreatePost extends Component {
constructor(){
  super();
  this.state={
    previewImage:'image_1'
  }
}
    render() {
       if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
        return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
        <Image source={require("../assets/logo.png")}
        style={styles.iconImage}></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>new post </Text>
        </View>
        </View>
        <View style={styles.fieldscontainer}>
        <ScrollView>
        <Image source={require("../assets/image_1.jpg")}
        style={styles.previewImage}></Image>
        <View style={{height:this.state.dropdownHeight}}>
        <DropDownPicker 
        items={[
          {label:'Image1', value:'image_1'},
          {label:'Image2', value:'image_2'},
          {label:'Image3', value:'image_3'},
          {label:'Image4', value:'image_4'},
          {label:'image5', value:'image_5'},
          {label:'Image6', value:'image_6'},
          {label:'Image7', value:'image_7'}
        ]}
        defaultValue={this.state.previewImage}
        containerStyle={{
          height:40,
          borderRadius:20,
          marginBottom:10
        }}
        onOpen={()=>{
          this.setState({dropdownHeight:170})
        }}
        onClose={()=>{
          this.setState({dropdownHeight:40})
        }}
        style={{backgroundColor:'transparent'}}
        itemStyle={{
          justifyContent:'flex-start'
        }}
        dropdownStyle={{backgroundColor:'#2a2a2a'}}
        labelStyle={{color:'white'}}
        arrowStyle={{color:'white'}}
        onChangeItem={item=>
        this.setState({previewImage:item.value})} 
        
        />
        </View>
        <TextInput style={styles.inputFont}
        onChangeText={caption=>this.setState({caption})}
        placeholder={"Caption"}
        placeholderTextColor="white"
        
        />
          </ScrollView>
          </View>
          <View style={{flex:0.08}}/>
          </View>
            
    
        )
    }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
});
