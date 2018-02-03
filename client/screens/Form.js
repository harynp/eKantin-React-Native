import React, { Component }  from 'react'
import { Text, View, Button, Image, TextInput, FlatList, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAJZA9yV8dtutphQ1o_fo-Er5RzT_fFI8o",
    authDomain: "react-2e3f2.firebaseapp.com",
    databaseURL: "https://react-2e3f2.firebaseio.com",
    projectId: "react-2e3f2",
    storageBucket: "react-2e3f2.appspot.com",
    messagingSenderId: "229357531180"
  }
  
const contactsApp = firebase.initializeApp(config);
const rootRef = firebase.database().ref();
const people = rootRef.child('contacts');
  
export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Add',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./contact-icon.png")} 
                style={{width: 30, height: 30}}>
            </Image>
        )
    }

    
    save = () => {
        people.push({
            name : this.state.name
        })
    }

    onHandleInput= (value) => {
        console.log(value)
        this.setState({
           name: value.name
        })
    }

    render() {
        const { textStyle } = styles
        const Form = t.form.Form;
        const UserForm = t.struct({
            name: t.String
        });
        return (
            <View>
                 <Form ref="form" type={UserForm} onChangeText={(val) => this.onHandleInput(val)}/>
                 <TouchableHighlight style={{ margin: 0}} onPress={this.save}>
                 <Image 
                    source={require("./ok.png")} 
                    style={{width: 120, height: 30}}>
                </Image>
                 </TouchableHighlight>
            </View>     
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 30
    }
}