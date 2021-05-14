import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NumKey extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
    calcKey:{   
      backgroundColor:"grey",
      flex:.25
    },
      
    textDisplay:{
      color:"goldenrod",
      textAlign:"center",
      fontSize:36,         
    }
      
  });
