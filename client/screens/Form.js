import React, { Component }  from 'react'
import { Text, View, Button, Image, TextInput } from 'react-native'
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
  
  firebase.initializeApp(config);

  

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
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

    
    save() {
        
    }

    onChangeText(name){
        console.log(name)
    }

    render() {
        const { textStyle } = styles
        const Form = t.form.Form;
        const User = t.struct({
            name: t.String
        });
        return (
            <View>
                 <Form type={User} style={{flex: 1}} onChange={(text) => this.onChangeText(text)}/>
                 <Button
                title='Save'
                onPress={() => this.save()}
                />
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 30
    }
}