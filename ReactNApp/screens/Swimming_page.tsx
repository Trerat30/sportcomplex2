import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList,SafeAreaView, ImageBackground,    } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import Icon from 'react-native-vector-icons/AntDesign';





const swimmingPool_bar = require("../img/tapbar_swim.png")
const swimmingPool_icon = require("../img/swimming_icon.png")



const Swimming_page = () => {
    const [date,timeset] = useState([
        {id :'1',time : '10:00 - 12:00'},
        {id: '2',time : '12:00 - 14:00'},
        {id: '3',time : '14:00 - 16:00'},
        {id: '4',time : '16:00 - 18:00'},
        {id: '5',time : '18:00 - 20:00'}]);
        
  return (
    <SafeAreaView style ={styles.contenner_page}>
        <View>
            <View style={styles.barArea}>     
                <Image source={swimmingPool_bar} resizeMode='cover' style ={styles.swimmingPool_bar}></Image>
            
            </View>
            <View>
                <TouchableOpacity>
                    <View style={styles.buttonInBox}>
                        <Icon name="left" size={20}/>
                            <Text style={styles.buttonText}>Go back</Text>
                    </View>
                </TouchableOpacity>
                <View/>
                <View style={styles.topArea}>
                     <View style={styles.containerBox1}>
                       <Text style={styles.text1}>Swimming Pool</Text>
                       <Text style={styles.text1}>Booking</Text>
                    </View>

                    <View style={styles.containerSwimIcon}>
                        <Image source={swimmingPool_icon} ></Image>
                    </View>
                </View>           
         </View>
         <View style={styles.containerBox2} >
            <Text style={styles.text2}> 15 September 2024</Text>
         </View>
        
       
       
    </View>
        </SafeAreaView>

  )
}


const styles = StyleSheet.create({
    contenner_page:{
        flex : 1,
    },
    swimmingPool_bar:{
        width:'105%',
        height:500,
    },
    barArea:{
        width:'105%',
        height:10,
    }, 
    buttonBox:{
        flex:1,
        width:'25%',
        height:30,
        margin :20,
        backgroundColor:'red',
        
    },
    buttonText:{
        marginLeft:10,
        fontSize:13,
        color:"black",
    },
    leftIcon:{
        marginLeft:5
    },
    buttonInBox:{
        marginTop:25,
        marginLeft:10,
        width:"25%",
        flexDirection:'row',
        alignItems:'center',
        height:30,
        backgroundColor:'white',
        borderRadius:25,

    },
    topArea:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerBox1:{
        marginTop:30,
        marginLeft:15,
        height:"25%",
    },
    text1:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',

    },
    containerSwimIcon:{
        marginTop:-50,
    },
    containerBox2:{
        alignSelf:'center',
        alignItems:'center',
        width:'50%',
        height:35,
        backgroundColor:'#0099FF',
        marginTop:50,
        borderRadius:25  
    },
    text2:{
        marginTop:7,
        color:'white',
        fontWeight:'bold'
    },


})

export default Swimming_page

