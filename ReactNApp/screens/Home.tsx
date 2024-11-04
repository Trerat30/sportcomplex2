import { View, Text , StyleSheet, ImageBackground, Image} from 'react-native'
import React from 'react'



const backgrounImg = require('../img/Background.png')
const swimmingPool = require("../img/Swimming_contener.png")
const Badminton = require("../img/Badminton_contener.png")
const Football = require("../img/Football_contener.png")
const Fitnet = require("../img/Fitnet_contener.png")

const Home = () => {
  return (
    <View>
      <View style={styles.background}>
          <ImageBackground source={backgrounImg} style={{width : 430 ,height :400}}></ImageBackground>
        </View>

        <View >
          <Text style ={styles.Textcolor1}>MFU Sport</Text>
           <Text style ={styles.Textcolor2}>Complex</Text>
        </View>
        <View>
          <Image source={swimmingPool} style={styles.swimmingPool_contener}></Image>
          <Image source={Badminton} style={styles.Badminton_contener}></Image>
          <Image source={Football} style={styles.Football_contener}></Image>
          <Image source={Fitnet} style={styles.Fitnet_contener}></Image>
        </View>
        <View >
          <Text style={styles.bar_contener}></Text>
        </View>
        <View >
          <Text style={styles.bar2_contener}></Text>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
  background : {
    flex : 1,
    color :"white"
  },
  Textcolor1 :{
    top : 30,
    fontSize : 30,
    left : 20,
    color : "white",
    fontWeight : "bold",
  },
  Textcolor2 :{
    top : 25,
    left: 20,
    fontSize : 23,
    color : "white",
    fontWeight : "bold",
  },
  swimmingPool_contener:{
    top : 180,
    alignSelf :"center"
  },
  Badminton_contener:{
    top:195,
    alignSelf:"center",
  },
  Football_contener:{
    top:210,
    alignSelf:"center",
  },
  Fitnet_contener:{
    top:225,
    alignSelf:"center", 
  },
  bar_contener:{
    top : 300,
    alignSelf :"center",
    height : 150,
    width : 450,
    backgroundColor : "#E6EAEE",
    borderRadius:90/2,
  },
  bar2_contener:{
    top:170,
    height: 150,
    width: 450,
    alignSelf :"center",
    backgroundColor : "#F5F6F7",
  }


  }
)

export default Home