import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HelloWorldApp extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Button
                    onPress={() => this.props.navigation.navigate('Detail')}
                    title="Next To Detail"
                    color="#841584"
                />
            </View>
        );
    }
}

export default HelloWorldApp;
