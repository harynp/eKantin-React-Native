import React, { Component }  from 'react'
import { Text, View, Button, Image } from 'react-native'

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./home.png")} 
                style={{width: 30, height: 30}}>
            </Image>
        )
    }

    render() {
        const { viewStyle, textStyle } = styles
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>HALAMAN 1</Text>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: "center"
    },
    textStyle: {
        fontSize: 30
    }
}