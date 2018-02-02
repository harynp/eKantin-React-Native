import React, { Component }  from 'react'
import { Text, View, Button, Image } from 'react-native'

export default class About extends Component {
    static navigationOptions = {
        tabBarLabel: 'Contact',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./contact-icon.png")} 
                style={{width: 30, height: 30}}>
            </Image>
        )
    }

    render() {
        const { viewStyle, textStyle } = styles
        return (
            <View style={viewStyle}>
            <Text style={textStyle}>HALAMAN 2</Text>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        justContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 30
    }
}