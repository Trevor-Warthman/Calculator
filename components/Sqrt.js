import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Sqrt extends Component{
    //JS
    constructor(props){
        super(props);
        this.state = {
          innerEquation:""
          }
      }
      
      function getTokens() {
        return "sqrt(" + this.state.innerEquation + ")"
      }
      
      
  render(){
    return(
        //HTML
        <View>
            <Text style={styles.sqrtChar}>&#8730;( {this.state.innerEquation} )</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
      //CSS
      sqrtChar:{
        color:"goldenrod",
        textAlign:"center",
        fontSize:36,    
        //lineHeight: 15,
        //textDecoration: 
      }
  });