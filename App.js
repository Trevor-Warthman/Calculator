import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumKey from "./components/NumKey.js";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:"",
      numerator:"",
      denominator:"",
      operator:"",
      switchFractionSection:false
      }
  }

  evaluate() {
    console.log(this.state.display)
  }

  setDisplay(num) { 
    this.setState({
      display: num
    })
  }
  
  addNumber(num) {
    this.setDisplay(this.state.display + num);
  } 

  clear() {
    this.setDisplay("");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
            <Text style={styles.title}>{this.state.display}</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <NumKey displayKey="1" onClick={()=> this.addNumber("1")} />
            <NumKey displayKey="2" onClick={()=> this.addNumber("2")} />
            <NumKey displayKey="3" onClick={()=> this.addNumber("3")} />
        </View>
        <View style={styles.calcKeyRow}>
            <NumKey displayKey="4" onClick={()=> this.addNumber("4")} />
            <NumKey displayKey="5" onClick={()=> this.addNumber("5")} />
            <NumKey displayKey="6" onClick={()=> this.addNumber("6")} />
        </View>
        <View style={styles.calcKeyRow}>
            <NumKey displayKey="7" onClick={()=> this.addNumber("7")} />
            <NumKey displayKey="8" onClick={()=> this.addNumber("8")} />
            <NumKey displayKey="9" onClick={()=> this.addNumber("9")} />
        </View>
        <View style={styles.calcKeyRow}>
            <NumKey displayKey="0" onClick={()=> this.addNumber("0")} />
            <NumKey onClick={()=> this.clear()} displayKey="C" />
            <NumKey displayKey="+" onClick={()=> this.addNumber("+")} />
        </View>
        <View style={styles.calcKeyRow}>
            <NumKey displayKey="-" onClick={()=> this.addNumber("-")} />
            <NumKey displayKey="*" onClick={()=> this.addNumber("*")} />
            <NumKey displayKey="/" onClick={()=> this.addNumber("/")} />
            <NumKey displayKey="=" onClick={()=> this.evaluate()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent:"space-around",
  },
    
  display:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    width:"70%",
    height:"10%",
    //textAlign:"center",
  },
    
  title: {    
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,
  },
    
  calcKeyRow:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
  }
});
