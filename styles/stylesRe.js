import React from "react";
import { StyleSheet } from "react-native";

const stylesRe = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5E45F',
      justifyContent: "center",
    },linha:{
      width: "auto",
      height: "auto",
      margin:25,
      paddingBottom: 25,
      borderBottomWidth: 5,
      borderBottomColor: "#ffffff",
    },container2: {
      marginTop:50,
      flex: 1,
      flexWrap: "wrap",
      margin:30,
      alignItems:"center",
      flexDirection: "column",
      backgroundColor: '#F5E45F',
    },
    h1:{
      fontFamily:"Segoe Ui",
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      marginTop:40,
      marginLeft:25,
  },p:{
    color:'white',
    fontSize:30,
    fontFamily:'Segoe Ui',
    fontWeight:'bold',
    marginTop:20,
    marginLeft:25,
  },infoTxt:{
    fontFamily:"Segoe Ui",
    color:"white",
    fontSize:30,
    marginTop:10,
    textAlign:"left",
  },txt:{
    fontFamily:"Segoe Ui",
    color:"white",
    fontSize:30,
    textAlign:"center",
  },
  BtWord1:{
    width:260,
    height:96,
    borderRadius: 10,
  }, BtWord2:{
    width:260,
    height:64,
    borderRadius: 10,
    marginTop:20,
  },BtWord3:{
    width:260,
    height:64,
    borderRadius: 10,
    marginTop:20,
  },choice:{
    fontFamily:"Segoe Ui",
    textAlign:'center',
    marginTop:15,
    fontSize:25,
  },negrito:{
    fontWeight: "bold",
  }, bottomBtn:{
    marginBottom:50,
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
  },
  btn:{
    backgroundColor:'white',
    width:100,
    height:38,
    marginLeft:10,
    borderRadius:10,
    alignItems:'center',
  },
  btnTxt:{
    marginTop:10,
    fontFamily:'Segoe Ui',
    fontWeight:'bold',
    color:"#F5E45F",
  }
});

export default stylesRe;